import { createContext, useState, type ReactNode } from "react";
import type { QuestionType } from "../../types/QuestionType";

export const GameContext = createContext<any>(null);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameQuestions, setGameQuestions] = useState<QuestionType[]>([]);

  const contextValue = {
    gameQuestionsContext: [gameQuestions, setGameQuestions],
    hasGameInProgress: gameQuestions.some((q) => q.answer === null),
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
