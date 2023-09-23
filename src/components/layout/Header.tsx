import React from "react";
import styles from "./header.module.css";
import { ConnectButton } from "../landing/ConnectButton";

interface HeaderProps {
  showWallet: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showWallet }) => {
  return (
    <header
      className={`w-full justify-${
        showWallet ? "around" : "center"
      }  font-mono text-center text-sm lg:flex `}
    >
      <h1 className="text-3xl m-2">BIGGER BROTHER</h1>

      {showWallet && <ConnectButton />}
    </header>
  );
};
