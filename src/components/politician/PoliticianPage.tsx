import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

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

  console.log(image);
  console.log(name);
  const formattedImage = getFirstArrayElementOrValue(image);

  return (
    <div className="flex flex-col justify-center text-center items-center font-mono">
      <h1 className="text-2xl m-2 font-mono">{name}</h1>
      <Image src={`${image}`} alt={"name"} width={300} height={200} />
      <label className="label">
        <span className="label-text ">Add evidence</span>
      </label>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
      />
    </div>
  );
};
