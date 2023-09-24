import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Card } from "./Card";
import politiciansData from "../../../data/politiciansData";

export const Politicians = () => {
  const router = useRouter();

  // get data from IPFS
  // show it

  return (
    <div className="overflow-x-auto mx-2">
      <div
        className="flex flex-nowrap "
        style={{ width: `${politiciansData.length * 100}px` }}
      >
        {politiciansData.map((element, index) => {
          const handleClick = () => {
            router.push({
              pathname: `/${element.name}`,
              query: {
                name: element.name,
                image: element.image,
                truthPercentage: element.truthiness,
              },
            });
          };

          return (
            <Card
              key={index}
              name={element.name}
              image={element.image}
              truthPercentage={element.truthiness}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};
