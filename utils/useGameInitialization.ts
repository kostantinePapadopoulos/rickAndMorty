// hooks/useGameInitialization.js
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GameContext } from "../components/contextProviders/GameContext";
import { getRandomCharacter } from "../utils/getRandomCharacter";
import { generateQuestion } from "../utils/generateQuestion";
import type { QuestionType } from "../types/QuestionType";

export const useGameInitialization = () => {
  const navigate = useNavigate();

  const { gameQuestionsContext } = useContext(GameContext)!;
  const [gameQuestions, setGameQuestions] = gameQuestionsContext;

  const {
    data: characters,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["gameCharacters"],
    queryFn: () =>
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((res) => res.results),
  });

  const startNewGame = () => {
    if (!characters) return;

    const temp = [] as QuestionType[];
    const usedIds = [] as number[];

    for (let i = 0; i < 5; i++) {
      const answer = getRandomCharacter(characters, usedIds);
      if (answer) {
        usedIds.push(answer.id);
        temp.push(generateQuestion(characters, answer));
      }
    }

    setGameQuestions(temp);
    navigate("/game");
  };

  const continueGame = () => {
    navigate("/game");
  };

  const hasGameInProgress = gameQuestions.find(
    (que: QuestionType) => que.answer === null
  );

  return {
    startNewGame,
    continueGame,
    hasGameInProgress,
    characters,
    isLoading,
    error,
  };
};
