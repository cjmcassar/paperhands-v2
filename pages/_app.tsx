import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import "./global.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  <ThirdwebProvider
    desiredChainId={activeChainId}
    authConfig={{
      authUrl: "/api/auth",
      domain: "localhost:3000",
      loginRedirect: "/",
    }}
  >
    <Component {...pageProps} />
  </ThirdwebProvider>;
}

export default MyApp;
