import React from "react";

export const TruthMeasure = () => {
  const progressValue = 40;

  const colorClass = progressValue < 50 ? "progress-error" : "progress-success";

  return (
    <div className="flex gap-2 align-center items-center m-3">
      <p>lie </p>
      <progress
        className={`progress progress-error w-56`}
        value={progressValue}
        max="100"
      ></progress>
      <p>truth</p>
    </div>
  );
};
