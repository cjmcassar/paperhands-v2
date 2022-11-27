import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import "./global.css";

const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />;
    </ThirdwebProvider>
  );
}

export default MyApp;
