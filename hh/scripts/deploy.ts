import { ethers } from "hardhat";

async function main() {

  const bb = await ethers.deployContract("BB");
  await bb.waitForDeployment();

  console.log(
    `BiggerBrother with deployed to ${bb.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
