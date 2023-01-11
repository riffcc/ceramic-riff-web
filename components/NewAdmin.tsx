import { useFragment_experimental, useMutation } from "@apollo/client"
import { ChangeEvent, useMemo, useState } from "react"
import { AdminFragment, CREATE_ADMIN, CREATE_ETH_ACCOUNT, UserFragment, WebsiteData, websiteDataQueryParams } from "../utils/constants"
import { getDate } from "../utils/getDate";
import Spinner from "./Layout/Spinner";

export default function NewAdmin() {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const [newAdminAddress, setNewAdminAddress] = useState("")
  const [createAdmin, { loading: loadingNewAdmin }] = useMutation(CREATE_ADMIN, {
    update: (cache, result) => {
      cache.updateFragment({
        id: `Website:${websiteID}`,
        fragment: WebsiteData,
        fragmentName: 'WebsiteData',
        variables: {
          ...websiteDataQueryParams
        }
      }, (data) => {
        if (data?.admins.edges) {
          return {
            ...data,
            admins: {
              ...data.admins,
              edges: [
                ...data.admins.edges,
                { __typename: 'AdminEdge', node: result.data?.createAdmin?.document }
              ]
            },
            adminsCount: data.adminsCount + 1
          }
        } else {
          return data
        }
      })
    }
  });
  const [createEthAccount, { loading: loadingNewEthAccount }] = useMutation(CREATE_ETH_ACCOUNT, {
    update: (cache, result) => {
      cache.updateFragment({
        id: `Website:${websiteID}`,
        fragment: WebsiteData,
        fragmentName: 'WebsiteData',
        variables: {
          ...websiteDataQueryParams
        }
      }, (data) => {
        if (data?.users.edges) {
          return {
            ...data,
            users: {
              ...data.users,
              edges: [
                ...data.users.edges,
                { __typeName: 'EthAccountEdge', node: result.data?.createEthAccount?.document }
              ]
            },
            usersCount: data.usersCount + 1
          }
        } else {
          return data
        }
      })
    }
  });

  const handleOnChangeNewAdminAddress = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setNewAdminAddress('')
      return
    }
    setNewAdminAddress(e.target.value)
  }

  const isValidAddress = useMemo(() => newAdminAddress.length === 42, [newAdminAddress])

  const { complete: isUser, data: userData } = useFragment_experimental({
    from: {
      __typename: "EthAccount",
      address: isValidAddress ? newAdminAddress : null
    },
    fragment: UserFragment,
  })

  const { complete: isAdminUser } = useFragment_experimental({
    from: {
      __typename: "Admin",
      admin: {
        address: isValidAddress ? newAdminAddress : null
      }
    },
    fragment: AdminFragment,
  })
  const handleSubmit = async () => {
    setNewAdminAddress('')
    if (!isUser) {
      const result: any = await createEthAccount({
        variables: {
          input: {
            content: {
              address: newAdminAddress,
              websiteID,
              metadata: {
                createdAt: getDate(),
                updatedAt: getDate()
              }
            }
          },
        }
      })

      const adminID = result.data?.createEthAccount?.document.id

      await createAdmin({
        variables: {
          input: {
            content: {
              websiteID,
              adminID,
              metadata: {
                createdAt: getDate(),
                updatedAt: getDate()
              }
            }
          }
        }
      })
    } else {
      await createAdmin({
        variables: {
          input: {
            content: {
              websiteID,
              adminID: userData?.id,
              metadata: {
                createdAt: getDate(),
                updatedAt: getDate()
              }
            }
          }
        }
      })
    }
  }

  return (
    <div className="h-24">
      <p className="font-medium mb-2">Add New Admin</p>
      <div className="flex items-center gap-2">
        <input
          placeholder="0xa5Cf4DDFe4BfDbE712bD2f54EAadaCebb809fAED"
          name="newAdminAddress"
          type="text"
          className=" text-black text-sm rounded-lg h-10 w-80"
          onChange={handleOnChangeNewAdminAddress}
          value={newAdminAddress}
        />
        <button
          className="py-2 px-4 h-10 w-24 rounded-lg bg-cyan-500 disabled:hover:bg-cyan-900 disabled:bg-cyan-900 disabled:text-slate-400 hover:cursor-point disabled:hover:cursor-default delay-100 hover:bg-cyan-600"
          disabled={loadingNewAdmin || loadingNewEthAccount || !isValidAddress || isAdminUser}
          onClick={handleSubmit}
        >
          {loadingNewAdmin || loadingNewEthAccount ? <Spinner className="h-5 w-5 text-white animate-spin mx-auto" /> : <p>Submit</p>}
        </button>
      </div>
      {newAdminAddress.length > 0 && !isValidAddress && <p className="text-xs text-red-600 mt-1 ml-2">Not a valid address.</p>}
      {isAdminUser && <p className="text-xs mt-1 ml-2 text-red-600">This address is already admin.</p>}

    </div>
  )
}
