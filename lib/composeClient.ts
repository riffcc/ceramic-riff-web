import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import { ComposeClient } from '@composedb/client'
import { definition } from './definitions'

export const createComposeClient = (did: DID) => {
  // replace api url env var
  const ceramic = new CeramicClient('http://localhost:7007')
  ceramic.did = did
  return new ComposeClient({
    ceramic: ceramic,
    definition,
  })
}
