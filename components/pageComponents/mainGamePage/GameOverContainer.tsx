import { useContext } from "react";
import { GameContext } from "../../contextProviders/GameContext";
import type { QuestionType } from "../../../types/QuestionType";
import IntroGameButton from "../../buttons/IntroGameButton";
import { useNavigate } from "react-router-dom";
import { useGameInitialization } from "../../../utils/useGameInitialization";

const GameOverContainer = () => {
  const navigate = useNavigate();
  const { gameQuestionsContext } = useContext(GameContext);
  const [gameQuestions] = gameQuestionsContext;
  const { startNewGame } = useGameInitialization();

  const totalQuestions = gameQuestions.length;

  const totalQuestionsAnsweredCorrect = gameQuestions.filter(
    (itm: QuestionType) => itm.answer === true
  ).length;

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg">
      <div className="text-6xl font-bold bg-linear-to-r from-portalsColor to-ricksHair bg-clip-text text-transparent py-4">
        Game Complete!
      </div>

      <div className="text-xl">
        You got{" "}
        <span className="text-portalsColor">
          {totalQuestionsAnsweredCorrect}
        </span>{" "}
        out of {totalQuestions} questions correct!
      </div>
      <div className="flex flex-col gap-1 items-center">
        <div className="text-lg font-semibold">Your Score!</div>
        <div className="text-6xl font-bold text-portalsColor">
          {Math.round((totalQuestionsAnsweredCorrect / totalQuestions) * 100)}%
        </div>
      </div>
      <div className="grid gap-2">
        <IntroGameButton label="Start over" onHandleClick={startNewGame} />
        <IntroGameButton
          label="Back to Start page"
          onHandleClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default GameOverContainer;
