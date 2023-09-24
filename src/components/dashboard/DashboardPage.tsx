import React, { useContext } from "react";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { createHelia } from 'helia'
import { dagJson } from '@helia/dag-json'
import lighthouse from "@lighthouse-web3/sdk";
import { Politicians } from "./Politicians";
import { Form } from "./Form";
import { useFormContext } from "../layout/Layout";

export const DashboardPage = () => {
  const router = useRouter();
  const { showPoliticianForm } = useFormContext();

  const handleAddPolitician = async () => {
    const helia = await createHelia()
    const j = dagJson(helia)
    // Convert and add personObject to IPFS
    const politicianCID = await j.add({
      name: "Joe Biden",
      image: "/dummy-image.jpg",
      truthPercentage: 40,
    });

    console.log("politicianCID", politicianCID);

    // TODO:  call the addPolitician ABI
  };

  const handleAddEvidence = async () => {
    // Convert and add personObject to IPFS
    const evidenceCID = await lighthouse.upload(
      "/path/to/adorable/dog.jpg",
      "YOUR_API_KEY"
    );
    console.log("evidenceCID", evidenceCID);
    // TODO:  call the addEvidence ABI
  };

  // retireves a mapping of pCID and eCID data
  const handleSmartContractData = async () => {
    // TODO:  call thepublic mapping in the smart contract
    //https://github.com/ipfs/helia#-json
    // can loop through the mapp and uncompresse the mapping object
    // const retrievedObject = await d.get(myImmutableAddress2)
    // console.log(retrievedObject)
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 4 }}
    >
      {showPoliticianForm ? <Form /> : <Politicians />}
    </motion.div>
  );
};
