import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ConnectButton } from "../landing/ConnectButton";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

interface HeaderProps {
  setShowPoliticianForm: Dispatch<SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ setShowPoliticianForm }) => {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

  const [alignment, setAlignment] = useState<string>("between");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/dashboard") {
      setIsWalletConnected(true);
      setAlignment("between");
    } else {
      setIsWalletConnected(false);
      setAlignment("center");
    }
  }, [router.pathname]);

  return (
    <header
      className={`items-center justify-between align-center font-mono text-center text-sm flex w-full`}
    >
      <div className="flex items-center">
        <Image alt="Eye" src="/eye-small.png" height={50} width={20} />
        <h1 className="text-3xl m-2">Bigger Brother</h1>
      </div>
      <div>
        {isWalletConnected && (
          <button
            className="border font-mono bg-neutral-300 text-neutral-700 rounded-lg p-3 m-2"
            onClick={() => setShowPoliticianForm(true)}
          >
            Add politician
          </button>
        )}
        {isWalletConnected && <ConnectButton />}
      </div>
    </header>
  );
};
