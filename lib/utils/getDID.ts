import { DID } from "dids"
import { Ed25519Provider } from "key-did-provider-ed25519"
import { getResolver } from "key-did-resolver"
import { fromString } from "uint8arrays"

export default function getDID() {
  //<<
  const privateKey = fromString(
    '5d9065d6806d29b0b62e8e2311ff1c56073ff0cd5b325be67a373f6271a30532',
    'base16'
  )
  return new DID({
    resolver: getResolver(),
    provider: new Ed25519Provider(privateKey),
  })
}