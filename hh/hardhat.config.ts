import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


import { resolve } from "path";

import { config as dotenvConfig } from "dotenv";
import { NetworkUserConfig } from "hardhat/types";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const privateKey = process.env.PRIVATE_KEY ?? "NO_PRIVATE_KEY";
const benefactorPrivateKey = process.env.BENEFACTOR_PRIVATE_KEY;
// Make sure node is setup on Alchemy website
const alchemyApiKey = process.env.ALCHEMY_API_KEY ?? "NO_ALCHEMY_API_KEY";

const chainIds = {
    goerli: 5,
    hardhat: 1337,
    kovan: 42,
    mainnet: 1,
    rinkeby: 4,
    ropsten: 3,
};

function getChainConfig(network: keyof typeof chainIds): NetworkUserConfig {
  const url = `https://eth-${network}.alchemyapi.io/v2/${alchemyApiKey}`;
  return {
      accounts: [`${privateKey}`, `${benefactorPrivateKey}`],
      chainId: chainIds[network],
      url,
  };
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  gasReporter: {
      currency: "USD",
      enabled: process.env.REPORT_GAS ? true : true,
      excludeContracts: [],
      src: "./contracts",
  },
  networks: {
      hardhat: {
          forking: {
              url: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
          },
          chainId: chainIds.hardhat,
         
      },
      // Uncomment for testing. Commented due to CI issues
      // mainnet: getChainConfig("mainnet"),
      // rinkeby: getChainConfig("rinkeby"),
      goerli: getChainConfig("goerli"),
    
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
            metadata: {
                bytecodeHash: "none",
            },
            optimizer: {
                enabled: true,
                runs: 800,
            },
        },
    },
    {
        version: "0.4.11",
        settings: {
            metadata: {
                bytecodeHash: "none",
            },
            optimizer: {
                enabled: true,
                runs: 800,
            },
        },
    },
    ]
    
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;
