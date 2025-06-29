import type { ReactNode } from "react";

const IntroGameButton = ({
  onHandleClick,
  isDisabled = false,
  label,
}: {
  onHandleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isDisabled?: boolean;
  label: string | ReactNode;
}) => {
  return (
    <button
      onClick={isDisabled ? undefined : onHandleClick}
      className={`${
        isDisabled ? "opacity-50" : ""
      } cursor-pointer text-2xl min-w-[400px] bg-portalsColor border-1 border-ricksHair text-white rounded p-3 transition-all duration-400 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}
    >
      {label}
    </button>
  );
};
export default IntroGameButton;
