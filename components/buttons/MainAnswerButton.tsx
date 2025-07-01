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
  const getButtonStyles = () => {
    if (isDisabled) {
      return "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300";
    }

    switch (isCorrect) {
      case true:
        return "bg-green-50 hover:bg-green-100 text-green-700 border-green-200 hover:border-green-300 hover:shadow-lg";
      case false:
        return "bg-red-50 hover:bg-red-100 text-red-700 border-red-200 hover:border-red-300 hover:shadow-lg";
      default:
        return "bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25";
    }
  };

  const getIconStyles = () => {
    switch (isCorrect) {
      case true:
        return "text-green-600";
      case false:
        return "text-red-600";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={isDisabled ? undefined : onHandleClick}
      className={`
        relative inline-flex items-center justify-center
        min-h-8 px-6 py-1
        font-semibold text-sm
        border-2 rounded-xl
        transition-all duration-300 ease-in-out
        transform hover:scale-[1.02] active:scale-[0.98]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${getButtonStyles()}
        ${
          isDisabled
            ? "cursor-not-allowed"
            : "hover:-translate-y-0.5 cursor-pointer"
        }
        ${isCorrect == true && "bg-green-300 !text-white"}
        ${isCorrect == false && "bg-red-300 !text-white"}
      `}
    >
      <div className="flex items-center gap-2">
        {isCorrect === true && (
          <svg
            className={`w-5 h-5 ${getIconStyles()}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        )}
        {isCorrect === false && (
          <svg
            className={`w-5 h-5 ${getIconStyles()}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        )}
        {label}
      </div>
    </button>
  );
};
export default MainAnswerButton;
