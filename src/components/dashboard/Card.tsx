import React from "react";
import { TruthMeasure } from "./TruthMeasure";

interface CardProps {
  name: string;
  image: string;
  truthPercentage: number;
  handleClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  name,
  image,
  truthPercentage,
  handleClick,
}) => {
  return (
    <button onClick={handleClick}>
      <div className="card w-54 mx-10 shadow-xl border border-neutral-500 items-center text-center rounded-xl p-3 font-mono ">
        <h2 className="card-title text-xl">{name}</h2>
        <figure className="px-10 py-2">
          <img src={image} alt="Image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center align-center text-center">
          <TruthMeasure truthPercentage={truthPercentage} />
        </div>
      </div>
    </button>
  );
};
