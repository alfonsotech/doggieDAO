import RandomWord from "./RandomWord";
import WalletInfo from "./Wallet/WalletInfo";

function PageBody() {
  return (
    <>
      <p className="text-center text-lg">Here we are!</p>
      <WalletInfo></WalletInfo>
      <RandomWord></RandomWord>
    </>
  );
}

export default PageBody;