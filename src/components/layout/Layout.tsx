import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isConnected } = useAccount();
  const router = useRouter();

  // useEffect(() => {
  //   if (!isConnected) {
  //     router.push("/");
  //   }
  // });

  return (
    <div
      className={`flex w-full h-full flex-col p-4`}
      style={{ height: "100svh" }}
    >
      <Header showWallet={isConnected} />
      <main className="flex min-h-screen flex-col justify-around items-center p-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
