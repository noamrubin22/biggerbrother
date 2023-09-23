import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet } from "wagmi/chains";
import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const projectId = "20dcc07cbd893ad6d3427bf79f01b7be";

  const chains = [mainnet, arbitrum, goerli];
  const wagmiConfig = defaultWagmiConfig({
    chains,
    projectId,
    appName: "Web3Modal",
  });

  createWeb3Modal({ wagmiConfig, projectId, chains });

  return (
    <WagmiConfig config={wagmiConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  );
}
