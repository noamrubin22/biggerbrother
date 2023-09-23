import React, { useState } from "react";
import { ConnectButton } from "./ConnectButton";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

export const LandingPage = () => {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  if (isConnected) {
    console.log(address);
    router.push("/dashboard");
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <Image src="/eye.png" alt="Eye" width={150} height={150} />
      <h3 className="text-2xl font-mono p-2 m-2">start watching</h3>
      <ConnectButton />
    </div>
  );
};
