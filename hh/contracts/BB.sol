// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./OptimisticOracleV3Interface.sol";

contract BiggerBrother {
    // Array to hold all politician ids
    bytes32[] public politicians;
    enum Status {PENDING, SUCCESS, FAIL}

    struct Evidence {
        bytes32 ipfs_data_cid;  // array of cid of json objects with evidence data
        Status uma_status;
        bytes32 assertionId;
    }

    OptimisticOracleV3Interface oov3 =
        OptimisticOracleV3Interface(0x9923D42eF695B5dd9911D05Ac944d4cAca3c4EAB);

    // Define a public mapping from bytes32 to an array of bytes32
    mapping(bytes32 => Evidence[]) public politicianToEvidenceMapping;

    // Function to create a new key with an empty array of bytes32
    function createPolitician(bytes32 pCID) public {
        require(
            politicianToEvidenceMapping[pCID].length == 0,
            "Key already exists"
        );
        politicianToEvidenceMapping[pCID] = new Evidence[](0);
        // save politician to list
        politicians.push(pCID);
    }

    // Function to push a value to the array associated with a key
    function addNewEvidence(bytes32 pCID, bytes32 eCID) public {
        Evidence memory newEvidence = Evidence(eCID, Status.PENDING,0);

        // get assertion
        string memory pCIDString = string(abi.encodePacked(pCID));
        string memory eCIDString = string(abi.encodePacked(eCID));
        string memory assertionString = string.concat("The following evidence is true for the politician. IPFS hashes: [Politician: ", pCIDString, "] [Evidence: ", eCIDString, "].");
        bytes memory assertion = bytes(assertionString);

        // assert against the Optimistic Asserter
        newEvidence.assertionId = oov3.assertTruthWithDefaults(assertion, address(this));
        // newEvidence.assertionId = oov3.assertTruth(
        //     assertion,
        //     address(this),
        //     address(this), // Callback recipient
        //     address(0), // No sovereign security.
        //     600,
        //     defaultCurrency,
        //     bond,
        //     defaultIdentifier,
        //     bytes32(0) // No domain.
        // );

        // add evidence to mapping
        politicianToEvidenceMapping[pCID].push(newEvidence);
    }

    function settleAndGetAssertionResult(bytes32 pCID, bytes32 eCID) public returns (bool) {
        bytes32 assertionId = politicianToEvidenceMapping[pCID][eCID].assertionId;
        politicianToEvidenceMapping[pCID][eCID].uma_status =  oov3.settleAndGetAssertionResult(assertionId);
    }


}
