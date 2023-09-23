import React, { useEffect, useState } from "react";

interface FooterProps {
  showText: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showText }) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mb-5">
      {showText && isClient && (
        <div>
          <p className="font-mono text-xs text-neutral-400">
            Who controls the past controls the future. Who controls the present
            controls the past.
            {/* </p>{" "} */}
            {/* <p className="font-mono text-xs text-neutral-400"> */}
          </p>
        </div>
      )}
    </div>
  );
};
