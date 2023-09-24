import React, { useEffect, useState } from "react";
import { ConnectButton } from "../landing/ConnectButton";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

export const Header = () => {
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
      {/* {isWalletConnected && (
        <button className="border font-mono bg-neutral-500 rounded-lg p-3 w-80">
          ADD POLITICIAN
        </button>
      )} */}
      {isWalletConnected && <ConnectButton />}
    </header>
  );
};
