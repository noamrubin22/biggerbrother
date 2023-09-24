import { useRouter } from "next/router";
import React, { useState } from "react";
import { createHelia } from 'helia'
import { json } from '@helia/json'
import lighthouse from "@lighthouse-web3/sdk";
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'

// The 'fs' builtin module on Node.js provides access to the file system
import fs from 'fs'

// The 'path' module provides helpers for manipulating filesystem paths
import path from 'path'
import dotenv from 'dotenv';

dotenv.config();

export const Form = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

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


  /**
  * Reads an image file from `imagePath` and stores an NFT with the given name and description.
  * @param {string} imagePath the path to an image file
  * @param {string} name a name for the NFT
  * @param {string} description a text description for the NFT
  */
  async function storeNFT(imagePath, name, description) {
    console.log("hereee")
    // load the file from disk
    // Create an object containing the data you want to send
    const dataToSend = {
      imagePath: imagePath,
      name: name,
      description: description,
    };

    try {
      const result = await fetch('/api/hello', {
        method: 'POST', // Use POST to send data in the request body
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(dataToSend), // Serialize the data as JSON and send it in the body
      });
      // create a new NFTStorage client using our API key
      console.log(result)
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
    }
    // const image = await fileFromPath(imagePath)
  }

  // /**
  //   * A helper to read a file from a location on disk and return a File object.
  //   * Note that this reads the entire file into memory and should not be used for
  //   * very large files. 
  //   * @param {string} filePath the path to a file to store
  //   * @returns {File} a File object containing the file content
  //   */
  // async function fileFromPath(filePath) {
  //   const content = await fs.promises.readFile(filePath)
  //   const type = mime.getType(filePath)
  //   return new File([content], path.basename(filePath), { type })
  // }


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

    // // upload image to file to light house 
    // const evidenceCID = await lighthouse.upload(formData.image, 'YOUR_API_KEY');
    // console.log("evidenceCID", evidenceCID)
    // make a call to attach evidence to politician 

    const result = await storeNFT(formData.image, "evidence", formData.image)
    console.log("RESULT!!!!!", result)
    // TODO:  call the addPolitician ABI 
  };

  const handleAddEvidence = async (e: React.FormEvent<HTMLFormElement>) => {

    // Here, you can access the form data from the formData state variable
    console.log('Form Data:', formData.image);
    // Convert and add personObject to IPFS
    const evidenceCID = await lighthouse.upload(formData.image, 'YOUR_API_KEY');
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
