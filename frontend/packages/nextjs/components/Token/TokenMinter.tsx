import { useState } from "react";
import { useAccount } from "wagmi";

function TokenMinter() {
  const [amount, setAmount] = useState("1");
  const [isMinting, setIsMinting] = useState(false);
  const [mintResult, setMintResult] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const { address } = useAccount();

  const handleMint = async () => {
    setIsMinting(true);
    setMintResult("");
    try {
      const response = await fetch("http://localhost:3001/mint-tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: address,
          amount: parseFloat(amount),
        }),
      });
      const data = await response.json();
      setMintResult(data.message || "Minting successful!");
      if (data.transactionHash) {
        setTransactionHash(data.transactionHash);
      }
    } catch (error) {
      console.error("Minting error:", error);
      setMintResult(`Error minting tokens: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Mint MyToken</h2>
        <input
          type="number"
          placeholder="Amount to mint"
          className="input input-bordered w-full max-w-xs"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="card-actions justify-end">
          <button className={`btn btn-primary ${isMinting ? "loading" : ""}`} onClick={handleMint} disabled={isMinting}>
            {isMinting ? "Minting..." : "Mint Tokens"}
          </button>
        </div>

        {mintResult && <div className="mt-4 text-white">{mintResult}</div>}

        {transactionHash && (
          <div className="mt-4 text-white">
            Transaction Hash:{" "}
            <a href={`https://sepolia.etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">
              {transactionHash}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
export default TokenMinter;