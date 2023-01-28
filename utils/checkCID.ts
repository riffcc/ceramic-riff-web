import * as isIPFS from 'is-ipfs'

export default function checkCID(hash: string) {
  return isIPFS.cid(hash)
}
