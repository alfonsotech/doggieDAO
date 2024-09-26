import TokenBalance from "./TokenBalance";
import TokenName from "./TokenName";
import TokenMinter from "./TokenMinter";

function TokenInfo(params: { address: `0x${string}` }) {
  return (
    <div className="card w-96 bg-primary text-primary-content mt-4">
      <div className="card-body">
        <h2 className="card-title">Testing useReadContract wagmi hook</h2>
        <TokenName></TokenName>
        <TokenBalance address={params.address}></TokenBalance>
        <h1>Mint MyTokens</h1>
        <TokenMinter />
      </div>
    </div>
  );
}

export default TokenInfo;