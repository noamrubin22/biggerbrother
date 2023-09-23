import React from "react";

interface TruthMeasureProps {
  truthPercentage: number;
}

export const TruthMeasure: React.FC<TruthMeasureProps> = ({
  truthPercentage,
}) => {
  const colorClass =
    truthPercentage < 50 ? "progress-error" : "progress-success";

  return (
    <div className="flex gap-2 align-center items-center m-3">
      <p>lie </p>
      <progress
        className={`progress progress-error w-56`}
        value={truthPercentage}
        max="100"
      ></progress>
      <p>truth</p>
    </div>
  );
};
