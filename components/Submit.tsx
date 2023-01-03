import { gql, useMutation } from '@apollo/client'
import { ChangeEvent } from 'react'

export const ADD_WEBSITE = gql`
  mutation CreateWebsite ($input: CreateWebsiteInput!) {
  createWebsite(input: $input) {
    document {
      id
      websiteName
    }
  }
}`

export default function Submit() {
  const [createWebsite, { loading }] = useMutation(ADD_WEBSITE, {
    ignoreResults: true
  })

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target
    const formData = new window.FormData(form)
    const websiteName = formData.get('websiteName')
    form.reset()
    console.log(websiteName)
    createWebsite({ variables: { input: { content: { websiteName } } }})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="websiteName" name="websiteName" type="text" required />
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  )
}
