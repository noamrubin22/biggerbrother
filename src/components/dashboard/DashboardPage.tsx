import React from "react";
import { Card } from "./Card";

const DUMMY_DATA = [
  {
    name: "Joe Biden",
    promises: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui!",
      " Odio nulla voluptatibus pariatur aliquam animi voluptatem soluta eligendi quam dolorem officiis.",
      "In laudantium optio commodi ab saepe, molestiae dolores quisquam.",
    ],
    truthPercentage: 40,
  },
];

export const DashboardPage = () => {
  return (
    <div>
      <Card />
    </div>
  );
};
