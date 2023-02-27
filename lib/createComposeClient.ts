import { CeramicClient } from '@ceramicnetwork/http-client';
import { ComposeClient } from '@composedb/client';
import { definition } from './composedb/definitions';

export default function createComposeClient(ceramic: CeramicClient) {
  return new ComposeClient({
    ceramic: ceramic,
    definition,
  });
}