require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_RPC_URL = process.env.QUICKNODE_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
console.log('QUICKNODE_RPC_URL:::',QUICKNODE_RPC_URL);
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://stylish-chaotic-film.ethereum-sepolia.discover.quiknode.pro/49d4a295954715a3b4a77749adcb7195bd2836fb/",
      accounts: [PRIVATE_KEY],
    },
  },
};