import { useEffect } from "react"
import {  useConnect } from "wagmi"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import Spinner from "./Spinner"

export default function Connect() {
  const { connect, isLoading } = useConnect({
    connector: new MetaMaskConnector(),
  })
  const handleConnect = () => connect()
  
  return (
    <button
      className="h-9 min-w-[8rem] px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 hover:cursor-pointer disabled:cursor-default hover:disabled:bg-cyan-600 "
      onClick={handleConnect}
      disabled={isLoading}
    >
      {isLoading ? <Spinner className="h-5 w-5 animate-spin mx-auto" /> : <p className="font-semibold">Connect</p>}
    </button>
  )
}
