// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BiggerBrother {
    // Define a public mapping from bytes32 to an array of bytes32
    mapping(bytes32 => bytes32[]) public politicianToEvidenceMapping;

    // Function to create a new key with an empty array of bytes32
    function createPolitician(bytes32 pCID) public view {
        require(politicianToEvidenceMapping[pCID].length == 0, "Key already exists");
    }

    // Function to push a value to the array associated with a key
    function addNewEvidence(bytes32 pCID, bytes32 eCID) public {
        politicianToEvidenceMapping[pCID].push(eCID);
    }
}
