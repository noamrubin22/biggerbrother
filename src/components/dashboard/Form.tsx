import { useRouter } from "next/router";
import React, { useState } from "react";
import { createHelia } from 'helia'
import { json } from '@helia/json'
import lighthouse from "@lighthouse-web3/sdk";
import { useContractWrite } from "wagmi";



export const Form = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  let utf8 = new TextEncoder();

  const BBABI = [
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "pCID",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "eCID",
          "type": "bytes32"
        }
      ],
      "name": "addNewEvidence",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "pCID",
          "type": "bytes32"
        }
      ],
      "name": "createPolitician",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "politicianToEvidenceMapping",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "politicians",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  const BBAddress = "0x604CdCF5f6593e7bB7708Fa1e70350cfD9940eaE";

  const { data, isSuccess, write } = useContractWrite({
    address: BBAddress,
    abi: BBABI,
    functionName: 'createPolitician',
  })

  // Step 1: Define state variables for form input values
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null, // For file input, initialize as null
  });


  // Step 2: Event handlers to update the state when form fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };



  const handleAddPolitician = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e)
    const helia = await createHelia()
    const j = json(helia)

    // Here, you can access the form data from the formData state variable
    console.log('Form Data:', formData.name);
    // const form = e.currentTarget;
    // console.log(form)
    // const formData = new FormData(form);
    // const { name, description, image } = Object.fromEntries(formData.entries());
    // console.log("RAH", name, description, image);
    // Convert and add personObject to IPFS
    const politicianCID = await j.add({
      name: formData.name,
      description:formData.description,
      image: formData.image
    })

    console.log("politicianCID toString()", politicianCID.toString())
    console.log("politicianCID toJSON()", politicianCID.toJSON())
    console.log("politicianCID link()", politicianCID.link())


    // TODO:  call the addPolitician ABI 

    write({
      args: [ethers.u
    })

    

  };

  const handleAddEvidence = async (e: React.FormEvent<HTMLFormElement>) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { name, description, image } = Object.fromEntries(formData.entries());
    console.log(name, description, image);

    // upload to IPFS
    // setIsLoading(false)

    router.push("/dashboard");
  };

  return (
    <div className="font-mono">
      <h1 className="text-3xl text-center">Add a politician</h1>
      <form onSubmit={handleAddPolitician} className="mt-3 ">
        <div className="w-full">
          <label className="flex flex-col mb-4">
            <p className="label-text text-xs my-2">Name</p>
            <input
              type="text"
              name="name"
              placeholder="Joe Biden"
              className="input input-bordered w-full max-w-xs"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <label className="flex flex-col text-left">
          <p className="label-text text-xs my-2 ">Description</p>
          <input
            type="text"
            name="description"
            placeholder="President"
            className="input input-bordered w-full max-w-xs"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text text-xs">Add an image</span>
          </label>
          <input
            type="file"
            name="image"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            disabled={isLoading}
            className="px-10 mt-5 text-lg w-full h-10 btn bg-neutral-900 hover:bg-black/70 rounded-md "
          >
            {isLoading ? (
              <span className="loading loading-infinity loading-lg"></span>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
