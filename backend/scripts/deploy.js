const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");
const { ethers } = require("hardhat");


async function main() {


  // Get the FakeNFTMarketplace contract with the ContractFactory
  const fakeNFTMarketplace = await ethers.getContractFactory("FakeNFTMarketplace");
  // Deploy the FakeNFTMarketplace first
  const deployedFakeNFTMarketplace = await fakeNFTMarketplace.deploy();
  await deployedFakeNFTMarketplace.deployed();
  // Display the contract address of FakeNFTMarketplace on the console
  console.log("FakeNFTMarketplace contract address: ", deployedFakeNFTMarketplace.address);
  

  // Now get the cryptoDevsDao contract from Contract Factory
  const cryptoDevsDao = await ethers.getContractFactory("CryptoDevsDAO");
  // Deploy the cryptoDevsDao contract
  const deployedCryptoDevsDao = await cryptoDevsDao.deploy(
    deployedFakeNFTMarketplace.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    {
      // This assumes your metamask account has at least 1 ETH in its account
      // Change this value as you want
      value: ethers.utils.parseEther("0.01"),
    }
  );
  await deployedCryptoDevsDao.deployed();
  // Display the contract address of cryptoDevsDao on the console
  console.log("CryptoDevsDao contract address: ", deployedCryptoDevsDao.address);
}

main()
.then(() => {process.exit(0);})
.catch((error) => {
  console.error(error);
  process.exit(1);
})