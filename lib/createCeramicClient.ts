import { CeramicClient } from "@ceramicnetwork/http-client";

export default function createCeramicClient() {
  if (!process.env.NEXT_PUBLIC_NODE_URL)
    throw new Error("NEXT_PUBLIC_NODE_URL undefined");

  return new CeramicClient(process.env.NEXT_PUBLIC_NODE_URL);
}