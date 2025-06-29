import { useContext, useEffect, useState } from "react";
import PageContainer from "../containers/PageContainer";

import { GameContext } from "../contextProviders/GameContext";
//types
import type { CharacterType } from "../../types/CharacterType";
import type { QuestionType } from "../../types/QuestionType";
import QuestionContainer from "../pageComponents/mainGamePage/QuestionContainer";
import { useNavigate } from "react-router-dom";
import GameOverContainer from "../pageComponents/mainGamePage/GameOverContainer";
import { useGameInitialization } from "../../utils/useGameInitialization";

const MainGamePage = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<boolean | null>(null);
  const { hasGameInProgress } = useGameInitialization();
  const { gameQuestionsContext } = useContext(GameContext)!;

  const [gameQuestions, setGameQuestions] = gameQuestionsContext;

  const currentQuestion = gameQuestions.find(
    (que: QuestionType) => que.answer === null
  );

  const attemptAnswer = (
    currentQuestion: QuestionType,
    answer: CharacterType
  ) => {
    if (currentQuestion.character.id === answer.id) {
      setAnswer(true);
    } else setAnswer(false);
  };

  useEffect(() => {
    if (answer === null) return;

    const timer = setTimeout(() => {
      // Delay next question for the animations to complete
      setAnswer(null);
      setGameQuestions((prev: QuestionType[]) => {
        const currentQuestion = gameQuestions.find(
          (que: QuestionType) => que.answer === null
        );
        if (!currentQuestion) return prev;
        const newAnswers = prev.map((question) => {
          if (question.character.id === currentQuestion.character.id) {
            return {
              ...question,
              answer: answer,
            };
          }
          return question;
        });
        return newAnswers;
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [answer]);

  useEffect(() => {
    if (!hasGameInProgress && gameQuestions.length === 0) {
      navigate("/");
    }
  }, [currentQuestion, gameQuestions]);

  if (!currentQuestion && gameQuestions.length > 0)
    return (
      <PageContainer>
        <GameOverContainer />
      </PageContainer>
    );

  return (
    <PageContainer>
      {currentQuestion ? (
        <QuestionContainer
          key={currentQuestion.character.id}
          currentQuestion={currentQuestion}
          answer={answer}
          onAnswer={attemptAnswer}
        />
      ) : (
        <>Some kind of error occured</>
      )}
    </PageContainer>
  );
};
export default MainGamePage;
