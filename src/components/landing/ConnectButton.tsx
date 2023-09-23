import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useState, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";

export const ConnectButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false); // Track whether component is running on the client.

  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onOpen = async () => {
    setLoading(true);
    await open();
    setLoading(false);
  };

  const onClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  };

  return (
    <>
      {isClient && (
        <button
          onClick={onClick}
          disabled={loading}
          className="border font-mono rounded-lg p-4 m-2"
        >
          {loading
            ? "Loading..."
            : isConnected
            ? "Disconnect"
            : "Connect wallet"}
        </button>
      )}
    </>
  );
};
