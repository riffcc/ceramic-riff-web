import { gql, useApolloClient, useMutation } from "@apollo/client"
import { NextPage } from "next/types"
import { ChangeEvent, useState } from "react"
import { useAccount } from "wagmi"
import Connect from "../components/Layout/Connect"
import Spinner from "../components/Layout/Spinner"
import { CREATE_PIECE, pieceCategories, WebsiteData, websiteDataQueryParams } from "../utils/constants"
import { getDate } from "../utils/getDate"

const UploadPage: NextPage = () => {
  const websiteID = process.env.NEXT_PUBLIC_WEBSITE_ID
  const { address, isConnected } = useAccount()
  const apolloClient = useApolloClient()

  const [name, setName] = useState("");
  const [cid, setCid] = useState("");
  const [category, setCategory] = useState("default");

  const [createPiece, { loading: loadingMutation }] = useMutation(CREATE_PIECE, { 
    update: (cache, result) => {
      cache.updateFragment({
        id: `Website:${websiteID}`,
        fragment: WebsiteData,
        fragmentName: 'WebsiteData',
        variables: {
          ...websiteDataQueryParams
        }
      }, (data) => {
        if (data?.pieces.edges && data?.subscriptions.edges) {
          return {
            ...data,
            pieces: {
              ...data.pieces,
              edges: [
                ...data.pieces.edges,
                { __typename: 'PieceEgde', node: result.data?.createPiece?.document }
              ]
            },
            piecesCount: data.piecesCount + 1
          }
        } else {
        }
        return data
      })
    }
  })

  const handleOnChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setName("")
      return
    }
    setName(e.target.value)
  }

  const handleOnChangeCid = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setCid("")
      return
    }
    setCid(e.target.value)
  }

  const handleOnChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }
  
  const handleSubmit = () => {
    setName("")
    setCid("")
    const userEthAccount = apolloClient.readFragment({
      id: apolloClient.cache.identify({ __typename: "EthAccount", address }),
      fragment: gql`
      fragment EthAccountId on EthAccount {
        id
      }`
    })
    createPiece({
      variables: {
        input: {
          content: {
            websiteID,
            ownerID: userEthAccount.id,
            name,
            cid,
            category,
            approved: false,
            rejected: false,
            metadata: {
              createdAt: getDate(),
              updatedAt: getDate()
            }
          }
        }
      }
    })
  }

  return (
    <div className='px-4 py-10 min-h-screen'>
      <div className="w-96 border px-6 pt-8 pb-12 m-auto rounded-xl">
        <p className="text-lg font-semibold mb-4 text-center">Pin a new item</p>
        <div className='grid'>
          <p className="text-sm mb-1 ml-1">Name:</p>
          <input
            placeholder="Nyan Cat Meme"
            name="name"
            type="text"
            className="form-input text-black rounded-lg mb-4"
            onChange={handleOnChangeName}
            value={name}
          />
          <p className="text-sm mb-1 ml-1">IPFS CID:</p>
          <input
            placeholder="bafkreico2zlmcinytg2ri26o4mt73i25ikisd3vth6p4du5gcpek4fsace"
            name="cid"
            type="text"
            className="form-input text-black rounded-lg mb-4"
            onChange={handleOnChangeCid}
            value={cid}
          />
          <p className="text-sm mb-1 ml-1">Category:</p>
          <select
            className='form-select text-black rounded-lg mb-4'
            value={category}
            onChange={handleOnChangeCategory}
          >
            <option disabled hidden value='default'>Select a category</option>
            {
              pieceCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
          {
            isConnected ? (
              <button
                className="py-2 px-4 h-10 mt-4 rounded-lg bg-cyan-500 disabled:hover:bg-cyan-900 disabled:bg-cyan-900 disabled:text-slate-400 hover:cursor-point disabled:hover:cursor-default delay-100 hover:bg-cyan-600"
                disabled={loadingMutation || !name || !cid || category === 'default'}
                onClick={handleSubmit}
                >
                {loadingMutation ? <Spinner className="h-5 w-5 text-white animate-spin mx-auto" /> : <p>Submit</p>}
              </button>
            ) : (
                <Connect className="py-2 px-4 h-10 mt-4 rounded-lg bg-cyan-500 disabled:hover:bg-cyan-500 hover:cursor-point disabled:hover:cursor-default delay-100 hover:bg-cyan-600"/>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default UploadPage