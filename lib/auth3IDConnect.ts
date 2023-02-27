
import { ThreeIdConnect, EthereumAuthProvider } from "@3id/connect";
import { DID } from "dids";
import { getResolver as getKeyResolver } from "key-did-resolver";
import { getResolver as get3IDResolver } from "@ceramicnetwork/3id-did-resolver";
import { CeramicClient } from "@ceramicnetwork/http-client";

export default async function auth3IDConnect(userAddress: string, ceramic: CeramicClient) {
      if (!window.ethereum)
      throw new Error("Not Web3 Provider found. Please install Metamask");
      const threeID = new ThreeIdConnect();
      const authProvider = new EthereumAuthProvider(
        window.ethereum,
        userAddress
      );
      await threeID.connect(authProvider);
      const did = new DID({
        // Get the DID provider from the 3ID Connect instance
        provider: threeID.getDidProvider(),
        resolver: {
          ...get3IDResolver(ceramic),
          ...getKeyResolver(),
        },
      });
      // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
      // authentication flow using 3ID Connect and the Ethereum provider
      await did.authenticate();
      ceramic.did = did
      return {
        ceramic,
        iframe: threeID.iframe
      }
}