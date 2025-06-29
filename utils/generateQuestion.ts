import type { CharacterType } from "../types/CharacterType";

export const generateQuestion = (
  characters: CharacterType[],
  answer: CharacterType
) => {
  // Exclude correct answer character from pool
  const answerPool = characters.filter(
    (c: CharacterType) => c.id !== answer.id
  );

  // Shuffle pool and pick the first 4 indexes
  const shuffled = [...answerPool].sort(() => Math.random() - 0.5);
  const wrongAnswers = shuffled.slice(0, 4);

  return {
    character: answer,
    answers: [...wrongAnswers, answer].sort(() => Math.random() - 0.5), //shuffle again for random answer list order later on game
    answer: null,
  };
};
