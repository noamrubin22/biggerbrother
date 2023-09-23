import React from "react";
import { TruthMeasure } from "./TruthMeasure";

interface CardProps {
  name: string;
  image: string;
  truthPercentage: number;
}

export const Card: React.FC<CardProps> = ({ name, image, truthPercentage }) => {
  return (
    <div className="card w-96 shadow-xl border items-center text-center rounded-xl p-6 font-mono">
      <h2 className="card-title text-xl">Joe Biden</h2>
      <figure className="px-10 py-4">
        <img src="/dummy-image.jpg" alt="Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center align-center text-center">
        <TruthMeasure truthPercentage={truthPercentage} />
        <div className="card-actions flex flex-row justify-between m-2">
          <button className="border rounded-lg  p-2 m-2">Chat</button>
          <button className=" border rounded-lg  p-2 m-2">Evidence</button>
        </div>
      </div>
    </div>
  );
};
