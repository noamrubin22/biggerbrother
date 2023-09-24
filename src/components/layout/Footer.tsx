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
    <div className="flex flex-col justify-center items-center">
      {showText && isClient && (
        <div>
          <p className="secondary-font text-xl text-neutral-700 transparent/2 ">
            Who controls the past controls the future. Who controls the present
            controls the past.
          </p>
        </div>
      )}
    </div>
  );
};
