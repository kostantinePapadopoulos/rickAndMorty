import type { ReactNode } from "react";

const MainAnswerButton = ({
  onHandleClick,
  isDisabled = false,
  label,
  isCorrect = null,
}: {
  onHandleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isDisabled?: boolean;
  label: string | ReactNode;
  isCorrect?: boolean | null;
}) => {
  return (
    <button
      onClick={isDisabled ? undefined : onHandleClick}
      className={`${
        isDisabled
          ? "cursor-not-allowed"
          : "cursor-pointer hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      }
      ${
        isCorrect === null
          ? "border-blue-800 bg-blue-400 hover:bg-blue-600 text-white"
          : isCorrect
          ? "border-green-500 bg-green-100 text-green-800"
          : "border-red-500 bg-red-100 text-red-800"
      }
      
      border-1 h-10 font-bold py-2 px-4 rounded transition-all duration-200`}
    >
      {label}
    </button>
  );
};
export default MainAnswerButton;
