import { useContext, type ReactNode } from "react";
//components
import Header from "../layout/Header";
import { GameContext } from "../contextProviders/GameContext";

const PageContainer = ({ children }: { children: ReactNode }) => {
  const { themeContext } = useContext(GameContext)!;

  const [isDark] = themeContext;

  return (
    <div
      className={`${
        isDark ? "bg-gray-700 text-white" : "bg-white text-black"
      } flex flex-col justify-center min-h-screen min-w-screen transition-all duration-400`}
    >
      <Header />
      <div className="flex flex-col justify-center items-center gap-5 p-10">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
