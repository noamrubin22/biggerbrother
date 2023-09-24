import React from "react";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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
