import { useLocation, useNavigate } from "react-router-dom";
import { useGameInitialization } from "../../utils/useGameInitialization";
//components
import MainAnswerButton from "../buttons/MainAnswerButton";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { hasGameInProgress } = useGameInitialization();

  return (
    <div className="fixed top-0 left-0 flex w-full items-center p-4 justify-end gap-4">
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
