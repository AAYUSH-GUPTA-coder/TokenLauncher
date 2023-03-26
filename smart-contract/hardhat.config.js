require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const SCROLL_RPC_NODE = process.env.SCROLL_RPC_NODE;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmation: 1,
    },
    scrollAlpha: {
      url: SCROLL_RPC_NODE || "",
      accounts: [PRIVATE_KEY],
    },
  },
  // etherscan: {
  //   apiKey: {
  //     polygonMumbai: POLYGONSCAN_API_KEY,
  //   },
  // },
};
