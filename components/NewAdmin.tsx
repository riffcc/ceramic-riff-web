import { useFragment_experimental as useFragment, useMutation } from "@apollo/client"
import { ChangeEvent, useMemo, useState } from "react"
import { AdminFragment, CREATE_ADMIN, CREATE_ETH_ACCOUNT, pageSizeMedium, UPDATE_ADMIN, UserFragment, WebsiteData, websiteDataQueryParams } from "../utils/constants"
import { getDate } from "../utils/getDate";
import Spinner from "./Layout/Spinner";

export default function NewAdmin() {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const [newAdminAddress, setNewAdminAddress] = useState("");
  const [adminSuper, setAdminSuper] = useState(false)


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
  const [updateAdmin, { loading: loadingUpdateAdmin }] = useMutation(UPDATE_ADMIN)
  const handleOnChangeNewAdminAddress = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setNewAdminAddress('')
      return
    }
    setNewAdminAddress(e.target.value)
  }

  const handleOnCheckAdminSuper = (e: ChangeEvent<HTMLInputElement>) => {
    setAdminSuper(e.target.checked)
  }

  const isValidAddress = useMemo(() => newAdminAddress.length === 42, [newAdminAddress])

  const { complete: isUser, data: userData } = useFragment<any, any>({
    from: {
      __typename: "EthAccount",
      address: isValidAddress ? newAdminAddress : null
    },
    fragment: UserFragment,
    variables: {
      pageSizeMedium
    }
  })

  const { complete: isAdminUser, data: adminData } = useFragment<any, any>({
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
              super: adminSuper,
              metadata: {
                createdAt: getDate(),
                updatedAt: getDate()
              }
            }
          }
        }
      })
    } else {
      if (isAdminUser && adminData.inactive) {
        await updateAdmin({
          variables: {
            input: {
              id: adminData.id,
              content: {
                super: adminSuper,
                inactive: false,
                metadata: {
                  createdAt: adminData.metadata.createdAt,
                  updatedAt: getDate()
                }
              }
              
            }
          }
        })
      }
      else {
        await createAdmin({
          variables: {
            input: {
              content: {
                websiteID,
                adminID: userData?.id,
                super: adminSuper,
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
  }

  return (
    <div className="grid w-[25rem] h-48">
      <p className="font-medium mx-auto">Add new admin</p>
      <div className="h-24">
        <p className="text-sm mb-1 ml-1">Address:</p>
        <input
          placeholder="0xa5Cf4DDFe4BfDbE712bD2f54EAadaCebb809fAED"
          type="text"
          className="form-input text-black rounded-lg w-full"
          onChange={handleOnChangeNewAdminAddress}
          value={newAdminAddress}
        />
        {newAdminAddress.length > 0 && !isValidAddress && <p className="text-xs text-red-600 mt-1 ml-2">Not a valid address.</p>}
        {isAdminUser && !adminData.inactive && <p className="text-xs mt-1 ml-2 text-red-600">This address is already admin.</p>}
      </div>
      <div className="flex items-center">
        <p className="text-sm ml-1 mr-3">Super:</p>
        <input
          type="checkbox"
          className="form-checkbox rounded"
          onChange={handleOnCheckAdminSuper}
          checked={adminSuper}
        />
      </div>
      <button
        className="py-2 px-4 h-10 w-16 justify-self-end rounded-lg bg-cyan-500 disabled:hover:bg-cyan-900 disabled:bg-cyan-900 disabled:text-slate-400 hover:cursor-point disabled:hover:cursor-default delay-100 hover:bg-cyan-600"
        disabled={loadingNewAdmin || loadingNewEthAccount || loadingUpdateAdmin || !isValidAddress || (isAdminUser && !adminData.inactive)}
        onClick={handleSubmit}
      >
        {loadingNewAdmin || loadingNewEthAccount || loadingUpdateAdmin ? <Spinner className="h-5 w-5 text-white animate-spin mx-auto" /> : <p>Add</p>}
      </button>
    </div>
  )
}
