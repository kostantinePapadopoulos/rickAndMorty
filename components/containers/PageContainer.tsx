import { type ReactNode } from "react";
//components
import Header from "../layout/Header";

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-center min-h-screen min-w-screen">
      <Header />
      <div className="flex flex-col justify-center items-center gap-5 p-10">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
