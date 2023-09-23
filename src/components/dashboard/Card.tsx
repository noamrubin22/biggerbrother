import React from "react";
import { TruthMeasure } from "./TruthMeasure";

export const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border items-center text-center rounded-xl p-6 font-mono">
      <h2 className="card-title text-xl">Joe Biden</h2>
      <figure className="px-10 py-4">
        <img src="/dummy-image.jpg" alt="Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <TruthMeasure />
        <div className="card-actions flex justify-between">
          <button className="btn btn-primary border rounded-lg w-1/2 p-2 m-2">
            Chat
          </button>
          <button className="btn btn-primary border rounded-lg w-1/2 p-2 m-2">
            Evidence
          </button>
        </div>
      </div>
    </div>
  );
};
