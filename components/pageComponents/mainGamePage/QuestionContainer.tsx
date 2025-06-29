import { useContext } from "react";
import type { CharacterType } from "../../../types/CharacterType";
import type { QuestionType } from "../../../types/QuestionType";

import { GameContext } from "../../contextProviders/GameContext";
import MainAnswerButton from "../../buttons/MainAnswerButton";

const QuestionContainer = ({
  answer,
  currentQuestion,
  onAnswer,
}: {
  answer: boolean | null;
  currentQuestion: QuestionType;
  onAnswer: (currentQuestion: QuestionType, answer: CharacterType) => void;
}) => {
  const { gameQuestionsContext } = useContext(GameContext)!;

  const [gameQuestions] = gameQuestionsContext;

  const totalQuestions = gameQuestions.length;
  const totalQuestionsAnswered = gameQuestions.filter(
    (itm: QuestionType) => itm.answer !== null
  ).length;

  const totalQuestionsAnsweredCorrect = gameQuestions.filter(
    (itm: QuestionType) => itm.answer === true
  ).length;

  const currentQuestionCount = totalQuestions - totalQuestionsAnswered;
  const progressPercentage = (totalQuestionsAnswered / totalQuestions) * 100;

  return (
    <div className="p-6 rounded shadow-lg flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium text-gray-700">
            Question {currentQuestionCount} of {totalQuestions}
          </div>
          <div className="text-sm font-medium text-green-600">
            Correct: {totalQuestionsAnsweredCorrect}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-mortysShirt to-portalsColor h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="text-4xl font-thin">Can you guess who is this?</div>

      <img
        className={`rounded object-contain`}
        src={currentQuestion?.character?.image}
      />

      <div className="grid gap-1 min-w-[300px]">
        {currentQuestion.answers.map((answerMap: CharacterType) => (
          <MainAnswerButton
            key={answerMap.id}
            onHandleClick={() => onAnswer(currentQuestion, answerMap)}
            isDisabled={answer !== null}
            label={answerMap.name}
            isCorrect={
              answer !== null
                ? currentQuestion.character.id === answerMap.id
                : null
            }
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
