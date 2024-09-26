import { useReadContract } from "wagmi";
import MyTokenABI from '../../abis/MyToken.json';

function TokenName() {
  const { data, isError, isLoading } = useReadContract({
    address: "0xc89e7284cf41ecfd96afa858019617f1388c6e30",
    abi: MyTokenABI.abi,
    functionName: "name",
  });

  const name = typeof data === "string" ? data : 0;

  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return <div>Token name: {name}</div>;
}

export default TokenName;