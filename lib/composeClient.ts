import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import { ComposeClient } from '@composedb/client'
import { definition } from './definitions'

export const createComposeClient = (did: DID) => {
  if (!process.env.NEXT_PUBLIC_NODE_URL )
    throw new Error('ENVIROMENT VARIABLE NEXT_PUBLIC_NODE_URL UNDEFINED')
  const ceramic = new CeramicClient(process.env.NEXT_PUBLIC_NODE_URL)
  ceramic.did = did
  return new ComposeClient({
    ceramic: ceramic,
    definition,
  })
}
