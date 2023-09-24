import React from "react";

interface TruthMeasureProps {
  truthPercentage: number;
}

export const TruthMeasure: React.FC<TruthMeasureProps> = ({
  truthPercentage,
}) => {
  const colorClass = truthPercentage < 50 ? "text-red-700" : "text-green-600";

  return (
    <div className="flex flex-col gap-6 align-center items-center m-3 ">
      <div
        className={`radial-progress border-4 border-neutral-800 ${colorClass}`}
        style={
          {
            // "--value": truthPercentage, // looks like an error but it's not
            // "--thickness": "1rem",
            // "--size": "10rem",
          }
        }
      >
        {truthPercentage}%
      </div>
      <p className="text-sm text-neutral-700">truthiness</p>
    </div>
  );
};
