import type { CharacterType } from "./CharacterType";

export interface QuestionType {
  character: CharacterType;
  answers: CharacterType[];
  answer: boolean | null;
}
