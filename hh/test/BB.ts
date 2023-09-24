// import {
//   time,
//   loadFixture,
// } from "@nomicfoundation/hardhat-toolbox/network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("BiggerBrother", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function BBFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const BB = await ethers.getContractFactory("BiggerBrother");
    const bb = await BB.deploy();

    return { owner, otherAccount };
  }
  // write tests for createPolitician and addNewEvidence
  // describe("Deployment", function () {
  //     it("Should set the right owner", async function () {
  //         const { owner, otherAccount } = await loadFixture(BBFixture);

  //         expect(await bb.owner()).to.equal(owner.address);
  //     });
  // });
});
