import React from "react";
import styles from "./header.module.css";
import { ConnectButton } from "../landing/ConnectButton";
import Image from "next/image";

interface HeaderProps {
  isWalletConnected: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isWalletConnected }) => {
  return (
    <header
      className={`w-full  items-center justify-${
        isWalletConnected ? "around" : "center"
      }  font-mono text-center text-sm flex`}
    >
      <div className="flex items-center">
        {isWalletConnected && (
          <div>
            <img alt="Eye" src="/eye-small.png" style={{ height: "2rem" }} />
          </div>
        )}
        <h1 className="text-3xl m-2">Bigger Brother</h1>
      </div>
      {isWalletConnected && <ConnectButton />}
    </header>
  );
};
