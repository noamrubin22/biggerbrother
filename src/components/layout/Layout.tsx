import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isConnected } = useAccount();

  return (
    <div
      className={`flex w-full flex-col p-4 min-h-screen h-screen`}
      style={{ height: "100svh" }}
    >
      <Header showWallet={isConnected} />
      <main className="flex min-h-min flex-col justify-around items-center h-full p-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
