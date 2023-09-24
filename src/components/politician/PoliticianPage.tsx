import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TruthMeasure } from "../dashboard/TruthMeasure";
import politiciansData from "../../../data/politiciansData";

const findPoliticianData = (name: string) => {
  const politicianData = politiciansData.find((politician) => {
    return politician.name === name;
  });

  return politicianData;
};

export const PoliticianPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAddPromises, setShowAddPromises] = useState<boolean>(false);

  const router = useRouter();
  const name = Array.isArray(router.query.name)
    ? router.query.name[0]
    : router.query.name;

  let politicianData;
  if (name) {
    politicianData = findPoliticianData(name);
  }

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

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <motion.div
      className="flex flex-col items-center font-mono overflow-y-auto"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 3 }}
    >
      <button>
        <img src="/back-btn.png" alt="Back button" onClick={handleClick} />
      </button>
      <div className="flex flex-col items-center font-mono">
        <h1 className="text-5xl m-3 secondary-font  text-center">{name}</h1>
        <div className="flex self-center justify-center align-center items-center gap-5 ">
          <div className="w-1/5 rounded-xl">
            <img src={image} alt={"name"} />
          </div>
          <div className="avatar"></div>
          {truthPercentage && (
            <TruthMeasure truthPercentage={truthPercentage} />
          )}
        </div>
        <div className="w-3/4 text-neutral-500 font-mono">
          <ul>
            {politicianData &&
              politicianData.promises.map((promise, index) => {
                return (
                  <li className="m-3 p-2 rounded-lg text-center " key={index}>
                    <div className="collapse bg-neutral-900 ">
                      <input type="checkbox" />
                      <div className="collapse-title text-xl font-medium text-neutral-400">
                        {promise.title}
                      </div>
                      <div className="collapse-content">
                        <p>{promise.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
