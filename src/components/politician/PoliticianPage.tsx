import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TruthMeasure } from "../dashboard/TruthMeasure";

const DUMMY_DATA = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  "Earum, id quibusdam ipsum nisi est eveniet necessitatibus cum nobis",
  "dignissimos mollitia, reiciendis minima pariatur magni soluta quod",
  "enim facilis commodi dolores suscipit neque nostrum fugiat totam non!",
  "Nostrum expedita minus reprehenderit ducimus, velit iure minima modi eligendi",
  "eius in libero voluptates eum soluta voluptate sed",
];

export const PoliticianPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const name = Array.isArray(router.query.name)
    ? router.query.name[0]
    : router.query.name;

  const image = Array.isArray(router.query.image)
    ? router.query.image[0]
    : router.query.image;

  const truthPercentage = Array.isArray(router.query.truthPercentage)
    ? Number(router.query.truthPercentage[0])
    : Number(router.query.truthPercentage);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex flex-col items-center font-mono"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 3 }}
    >
      <div className="flex flex-col  font-mono">
        <h1 className="text-5xl m-3 secondary-font ">{name}</h1>
        <div className="flex self-center gap-2 ">
          {/* <Image src={`${image}`} alt={"name"} width={600} height={200} /> */}
          <div className="avatar">
            <div className="w-52 rounded-xl">
              <img src={image} alt={"name"} />
            </div>
          </div>
          {truthPercentage && (
            <TruthMeasure truthPercentage={truthPercentage} />
          )}
          <div>
            <label className="flex flex-col text-left">
              <h2 className="mt-4">Add evidence</h2>
              <p className="label-text text-xs my-2 ">Claim</p>
              <input
                type="text"
                name="description"
                placeholder="Claim"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="flex flex-col text-left">
              <p className="label-text text-xs my-2 ">Link to source</p>
              <input
                type="text"
                name="description"
                placeholder="https://www..."
                className="input input-bordered w-full max-w-xs"
              />
            </label>
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
        </div>
        <div>
          <ul>
            {DUMMY_DATA.map((el, index) => {
              return (
                <li className="m-5 p-2 border rounded-lg " key={index}>
                  <p>{el}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
