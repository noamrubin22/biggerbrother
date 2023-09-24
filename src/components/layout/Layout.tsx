import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode, createContext, useContext, useState } from "react";
import { useAccount } from "wagmi";

interface LayoutProps {
  children: ReactNode;
}

interface FormContextType {
  showPoliticianForm: boolean;
  setShowPoliticianForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showPoliticianForm, setShowPoliticianForm] = useState<boolean>(false);
  const { isConnected } = useAccount();

  return (
    <div
      className={`flex w-full flex-col p-4 min-h-screen h-screen overflow-hidden`}
      style={{ height: "100svh" }}
    >
      <Header setShowPoliticianForm={setShowPoliticianForm} />
      <FormContext.Provider
        value={{ showPoliticianForm, setShowPoliticianForm }}
      >
        <main className="flex min-h-min flex-col justify-around items-center h-full">
          {children}
        </main>
      </FormContext.Provider>
      <Footer showText={isConnected ?? false} />
    </div>
  );
};

export function useFormContext(): FormContextType {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
}

export default Layout;
