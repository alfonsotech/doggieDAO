import MyTokenABI from "../../abis/MyToken.json";
import { useReadContract } from "wagmi";
import { formatEther } from 'viem';

function TokenBalance({ address }: { address: `0x${string}` }) {
  const { data: balance, isError, isLoading, refetch } = useReadContract({
    address: '0xc89e7284cf41ecfd96afa858019617f1388c6e30',
    abi: MyTokenABI.abi,
    functionName: 'balanceOf',
    args: [address],
  });

  if (isLoading) return <div>Fetching balance…</div>;
  if (isError) return <div>Error fetching balance</div>;

  const formattedBalance = balance ? formatEther(BigInt(balance)) : '0';

  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">MyToken Balance</h2>
        Balance: {Number(formattedBalance).toFixed(2)}
        <button onClick={() => refetch()} className="btn btn-secondary mt-2">
          Refresh Balance
        </button>
      </div>
    </div>
  );
}

export default TokenBalance;