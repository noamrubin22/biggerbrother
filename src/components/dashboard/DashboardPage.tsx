import React from "react";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { createHelia } from 'helia'
import { json } from '@helia/json'
import lighthouse from "@lighthouse-web3/sdk";




const DUMMY_DATA = [
  {
    name: "Joe Biden",
    image: "/dummy-image.jpg",
    truthPercentage: 40,
  },
  {
    name: "Somebody",
    image: "/dummy-image.jpg",
    truthPercentage: 40,
  },
  {
    name: "Else",
    image: "/dummy-image.jpg",
    truthPercentage: 40,
  },
  {
    name: "Hello",
    image: "/dummy-image.jpg",
    truthPercentage: 40,
  },
  {
    name: "Test Biden",
    image: "/dummy-image.jpg",
    truthPercentage: 40,
  },
  {
    name: "Joe Biden",
    image: "/dummy-image.jpg",
    truthPercentage: 40,
  },
  {
    name: "Joe Biden",
    image: "/dummy-image.jpg",
    truthPercentage: 40,
  },
  {
    name: "Joe Biden",
    image: "/dummy-image.jpg",
    truthPercentage: 40,
  },
];

export const DashboardPage = () => {
  const router = useRouter();

  const handleAddPolitician = async () => {
    const helia = await createHelia()
    const j = json(helia)
    // Convert and add personObject to IPFS
    const politicianCID = await j.add({
      name: "Joe Biden",
      image: "/dummy-image.jpg",
      truthPercentage: 40,
    })

    console.log("politicianCID", politicianCID)


    // TODO:  call the addPolitician ABI 
  };



  const handleAddEvidence = async () => {

    // Convert and add personObject to IPFS
    const evidenceCID = await lighthouse.upload('/path/to/adorable/dog.jpg', 'YOUR_API_KEY');
    console.log("evidenceCID", evidenceCID)
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
      transition={{ duration: 8 }}
    >
      <div className="overflow-x-auto mx-2">
        <div
          className="flex flex-nowrap "
          style={{ width: `${DUMMY_DATA.length * 190}px` }}
        >
          {DUMMY_DATA.map((element, index) => {
            const handleClick = () => {
              router.push({
                pathname: `/${element.name}`,
                query: {
                  name: element.name,
                  image: element.image,
                  truthPercentage: element.truthPercentage,
                },
              });
            };

            return (
              <Card
                key={index}
                name={element.name}
                image={element.image}
                truthPercentage={element.truthPercentage}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
