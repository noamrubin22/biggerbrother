import React from "react";
import styles from "./header.module.css";
import { ConnectButton } from "../landing/ConnectButton";

interface HeaderProps {
  isWalletConnected: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isWalletConnected }) => {
  return (
    <header
      className={`w-full justify-${
        isWalletConnected ? "around" : "center"
      }  font-mono text-center text-sm flex`}
    >
      <h1 className="text-3xl m-2">BIGGER BROTHER</h1>

      {isWalletConnected && <ConnectButton />}
    </header>
  );
};
