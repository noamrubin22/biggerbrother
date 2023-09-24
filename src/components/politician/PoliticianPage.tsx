import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";

export const PoliticianPage = () => {
  const router = useRouter();
  const name = Array.isArray(router.query.name)
    ? router.query.name[0]
    : router.query.name;

  const image = Array.isArray(router.query.image)
    ? router.query.image[0]
    : router.query.image;

  const truthPercentage = Array.isArray(router.query.truthPercentage)
    ? router.query.truthPercentage[0]
    : router.query.truthPercentage;

  const getFirstArrayElementOrValue = (
    value?: string | string[]
  ): string | undefined => {
    if (typeof value === "undefined") {
      return undefined;
    }
    return Array.isArray(value) ? value[0] : value;
  };
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex flex-col text-center items-center font-mono"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 3 }}
    >
      <div className="flex flex-col text-center items-between font-mono">
        <h1 className="text-5xl m-3 secondary-font ">{name}</h1>
        <Image src={`${image}`} alt={"name"} width={300} height={200} />
        <label className="label">
          <span className="label-text ">Add evidence</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered bg-neutral-300 text-neutral-500  max-w-xs"
        />
      </div>
    </motion.div>
  );
};
