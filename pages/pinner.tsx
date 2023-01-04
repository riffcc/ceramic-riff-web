import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import { NextPage } from "next/types"
import { ChangeEvent, useCallback } from "react"
import Spinner from "../components/Layout/Spinner"
import { CREATE_PIECE } from "../utils/contants"

type Props = { websiteID: string }

const PinnerPage: NextPage<Props> = ({ websiteID }) => {

  const [createPiece, { loading: loadingMutation }] = useMutation(CREATE_PIECE)

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target
    const formData = new window.FormData(form)
    const name = formData.get('name')?.toString()
    const cid = formData.get('cid')?.toString()

    form.reset()
    createPiece({
      variables: {
        input: {
          content: {
            websiteID: websiteID,
            name: name!,
            cid: cid!,
            approved: false,
            rejected: false
          }
        }
      }
    })
  }
  
  return (
    <div className='px-4 py-10 min-h-screen'>
      <div className="w-96 border px-6 py-12 m-auto rounded-xl">
        <p className="text-lg font-semibold mb-6">Pin your item:</p>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <p className="text-sm mb-1 ml-1">Name:</p>
          <input placeholder="Nyan Cat Meme" name="name" type="text" className="form-input text-black rounded-lg mb-4" required/>
          <p className="text-sm mb-1 ml-1">IPFS CID:</p>
          <input placeholder="bafkreico2zlmcinytg2ri26o4mt73i25ikisd3vth6p4du5gcpek4fsace" name="cid" type="text" className="form-input text-black rounded-lg mb-4" required/>
          <button
            className="py-2 px-4 h-10 mt-4 rounded-lg bg-cyan-500 disabled:hover:bg-cyan-500 hover:cursor-point disabled:hover:cursor-default delay-100 hover:bg-cyan-600"
            type="submit"
            disabled={loadingMutation}>
            {loadingMutation ? <Spinner className="h-5 w-5 text-white animate-spin mx-auto" /> : <p>Submit</p>}
          </button>
        </form>
      </div>

    </div>
  )
}


export async function getServerSideProps() {

  if (!process.env.WEBSITE_ID) throw new Error("ENVIROMENT VARIABLE WEBSITE_ID UNDEFINED");

  const websiteID = process.env.WEBSITE_ID

  return {
    props: {
      websiteID
    }
  }
}
export default PinnerPage