const { ethers } = require('hardhat');
require('dotenv').config({ path: ".env" });


async function Home() {
    
    const MyTokenContract = await ethers.getContractFactory("MyToken");

    const deployedMyTokenContract = await MyTokenContract.deploy();

    await deployedMyTokenContract.deployed();

    console.log("My Token Contract Address: ", deployedMyTokenContract.address);
}

Home()
.then(()=> {process.exit(0)})
.catch((error)=> {
    console.error(error);
    process.exit(1);
})