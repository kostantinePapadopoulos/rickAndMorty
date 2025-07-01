import { useLocation, useNavigate } from "react-router-dom";
import { useGameInitialization } from "../../utils/useGameInitialization";
//components
import MainAnswerButton from "../buttons/MainAnswerButton";
import { useContext } from "react";
import { GameContext } from "../contextProviders/GameContext";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { hasGameInProgress } = useGameInitialization();

  const { themeContext } = useContext(GameContext)!;

  const [isDark, setIsDark] = themeContext;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="fixed top-0 left-0 flex w-full items-center p-4 justify-end gap-2">
      <button
        onClick={toggleTheme}
        className={`relative cursor-pointer inline-flex items-center justify-center w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isDark
            ? "bg-blue-600 focus:ring-blue-500"
            : "bg-gray-300 focus:ring-gray-400"
        }`}
      >
        <span
          className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            isDark ? "translate-x-8" : "translate-x-0"
          }`}
        >
          {isDark ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                fill="#3B82F6"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" fill="#EAB308" />
              <path
                d="m12 1 2 2-2 2-2-2 2-2ZM21 11h-3v2h3v-2ZM6 11H3v2h3v-2ZM12 21l2-2-2-2-2 2 2 2ZM20.485 3.515l-1.414 1.414 1.414 1.414 1.414-1.414-1.414-1.414ZM4.929 19.071l-1.414-1.414-1.414 1.414 1.414 1.414 1.414-1.414ZM19.071 19.071l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414ZM3.515 4.929l1.414-1.414L3.515 2.101 2.101 3.515l1.414 1.414Z"
                fill="#EAB308"
              />
            </svg>
          )}
        </span>
      </button>
      {location.pathname !== "/" && hasGameInProgress && (
        <MainAnswerButton
          onHandleClick={() => navigate("/")}
          label="Save and go back to Main menu!"
        />
      )}
    </div>
  );
};
export default Header;
