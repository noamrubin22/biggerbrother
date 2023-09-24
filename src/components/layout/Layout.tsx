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
      className={`flex w-full flex-col p-4 min-h-screen h-screen overflow-hidden`}
      style={{ height: "100svh" }}
    >
      <Header />
      <main className="flex min-h-min flex-col justify-around items-center h-full">
        {children}
      </main>
      <Footer showText={isConnected ?? false} />
    </div>
  );
};

export default Layout;
