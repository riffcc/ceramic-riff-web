import { DID } from "dids"
import { Ed25519Provider } from "key-did-provider-ed25519"
import { getResolver } from "key-did-resolver"
import { fromString } from "uint8arrays"

export default async function getDID() {
  if (!process.env.NEXT_PUBLIC_PRIVATE_KEY)
    throw new Error('ENVIROMENT VARIABLE NEXT_PUBLIC_PRIVATE_KEY UNDEFINED')
  
  const privateKey = fromString(
    process.env.NEXT_PUBLIC_PRIVATE_KEY,
    'base16'
  )
  const did = new DID({
    resolver: getResolver(),
    provider: new Ed25519Provider(privateKey),
  })
  await did.authenticate()
  return did
}