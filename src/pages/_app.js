import { ChakraProvider } from "@chakra-ui/react";
import { ChainId, DAppProvider, MULTICALL_ADDRESSES } from "@usedapp/core";
import React from "react";
import { MulticallContract } from "../artifacts/contracts/contractAddress";

// scaffold-eth's INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
export const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

const config = {
  readOnlyUrls: {
    [ChainId.Ropsten]: `https://ropsten.infura.io/v3/${INFURA_ID}`,
    [ChainId.Hardhat]: "http://localhost:8545",
    [ChainId.Localhost]: "http://localhost:8545",
  },
  supportedChains: [
    ChainId.Mainnet,
    ChainId.Goerli,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Ropsten,
    ChainId.xDai,
    ChainId.Localhost,
    ChainId.Hardhat,
  ],
  multicallAddresses: {
    ...MULTICALL_ADDRESSES,
    [ChainId.Hardhat]: MulticallContract,
    [ChainId.Localhost]: MulticallContract,
  },
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <DAppProvider config={config}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DAppProvider>
  );
};

export default MyApp;