import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet } from "wagmi/chains";
import { ConnectButton } from "./components/landing/ConnectButton";
import Layout from "./components/layout/Layout";
import { LandingPage } from "./components/landing/LandingPage";

const projectId = "20dcc07cbd893ad6d3427bf79f01b7be";

const chains = [mainnet, arbitrum, goerli];
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  appName: "Web3Modal",
});

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function Home() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Layout>
        {" "}
        <LandingPage />
      </Layout>
    </WagmiConfig>
  );
}
