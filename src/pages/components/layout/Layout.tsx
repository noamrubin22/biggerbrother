import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

  return (
    <div
      className={`flex w-full h-full flex-col p-4`}
      style={{ height: "100svh" }}
    >
      <Header />
      <main className="flex min-h-screen flex-col justify-around items-center p-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
