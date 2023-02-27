import { useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { useCeramic } from "../../context/Ceramic";
import Spinner from "./Spinner";

type Props = {
  className: string;
}
export default function Connect({ className }: Props) {
  const { connect, isLoading: isLoadingConnect } = useConnect({
    connector: new MetaMaskConnector(),
  })
  const { isLoading: isLoadingThreeId} = useCeramic()
  const handleConnect = () => connect()

  return (
    <button
      className={className}
      onClick={handleConnect}
      disabled={isLoadingConnect || isLoadingThreeId}
    >
      {isLoadingConnect || isLoadingThreeId ? <Spinner className="h-5 w-5 animate-spin mx-auto" /> : <p className="font-semibold">Connect</p>}
    </button>
  )
}
