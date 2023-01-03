import { DID } from "dids"
import { Ed25519Provider } from "key-did-provider-ed25519"
import { getResolver } from "key-did-resolver"
import { fromString } from "uint8arrays"

export default function getDID() {
  //<<
  const privateKey = fromString(
    '5c20379e3058b18fa7282ac3c2409ca6d376fc409e80824a1e4aaadcd90c95da',
    'base16'
  )
  return new DID({
    resolver: getResolver(),
    provider: new Ed25519Provider(privateKey),
  })
}