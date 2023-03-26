const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so launchPadNftContract here is a factory for instances of our LaunchpadNft contract.
  */
  const launchPadNftContract = await ethers.getContractFactory("LaunchPadNft");

  // here we deploy the contract
  const deployedLaunchPadNftContract = await launchPadNftContract.deploy(
    "0xB9f9Af07fAd74C23F35CAeC708515782a15911Ba"
  );

  // Wait for it to finish deploying
  await deployedLaunchPadNftContract.deployed();

  // print the address of the deployed contract
  console.log("Launchpad Contract Address:", deployedLaunchPadNftContract.address);

  // console.log("Sleeping.....");
  // // Wait for etherscan to notice that the contract has been deployed
  // await sleep(100000); // 100 seconds

  // // Verify the contract after deploying
  // await hre.run("verify:verify", {
  //   address: deployedLaunchPadNftContract.address,
  //   constructorArguments: ["0x4E476F7FB84c785557cDECdbf8CADEbE8EA57C37"],
  //   contract: "contracts/Launchpad.sol:LaunchPad",
  // });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
