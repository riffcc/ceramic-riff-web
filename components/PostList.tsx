import { gql, useQuery, NetworkStatus } from '@apollo/client'
import ErrorMessage from './ErrorMessage'

export const ALL_POSTS_QUERY = gql`
  query WebsiteIndex($first: Int) {
     websiteIndex(first: $first) {
        edges {
          node {
            id
            websiteName
          }
        }
      } 
  }
`

export const allPostsQueryVars = {
  first: 10,
}

export default function PostList() {
  const { loading, error, data } = useQuery(
    ALL_POSTS_QUERY,
    {
      variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )

  const { websiteIndex: { edges } } = data
  if (error) return <ErrorMessage message="Error loading posts." />
  if (loading) return <div>Loading</div>
  return (
    <section>
      <ul>
        {edges.map((item: any) => (
          <li key={item.node.id}>
            <div>
              <p>{item.node.id}</p>
              <p>{item.node.websiteName}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
