const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("MyToken", function () {

    it("Deploy correctly", async function () {
        console.log("Address is not default")
        const MyTokenContract = await ethers.getContractFactory("MyToken");

        const deployedMyTokenContract = await MyTokenContract.deploy();

        await deployedMyTokenContract.deployed();
        
        console.log("Deployed Contract Address: ", deployedMyTokenContract.address);

        expect(await deployedMyTokenContract.address).to.not.equal("0x0000000000000000000000000000000000000000");
    })


}
)

