import { createContext, useState, type ReactNode } from "react";
import type { GameContextType } from "../../types/GameContextType";
import type { QuestionType } from "../../types/QuestionType";

export const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameQuestions, setGameQuestions] = useState<QuestionType[]>([]);

  const contextValue: GameContextType = {
    gameQuestionsContext: [gameQuestions, setGameQuestions],
    hasGameInProgress: gameQuestions.some((q) => q.answer === null),
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
