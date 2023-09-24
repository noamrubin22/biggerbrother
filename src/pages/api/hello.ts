// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import mime from "mime";
// The 'path' module provides helpers for manipulating filesystem paths
import path from 'path'
import { NextApiRequest, NextApiResponse } from "next";
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'


//  async function fileFromPath(filePath) {
//    const content = await fs.promises.readFile(filePath);
//    const type = mime.getType(filePath);
//    return new File([content], path.basename(filePath), { type });
//  }
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Assuming you have parsed the JSON request body containing imagePath, name, and description
    const { imagePath, name, description } = req.body;
    console.log(imagePath, name, description)
    const content = await fs.promises.readFile(imagePath);
    const type = mime.getType(imagePath);
    // Create a File object
    const image = new File([content], path.basename(imagePath), { type });

    console.log(image)
    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({
      token:
       process.env.NFT_STORAGE_API_KEY,
    });

    // call client.store, passing in the image & metadata
     const result = nftstorage.store({
       image,
       name,
       description,
     });
     console.log(result)
    // Send the file or data as a response
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

