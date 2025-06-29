import type { Dispatch, SetStateAction } from "react";
import type { QuestionType } from "./QuestionType";

export interface GameContextType {
  gameQuestionsContext: [
    QuestionType[],
    Dispatch<SetStateAction<QuestionType[]>>
  ];
  hasGameInProgress: boolean;
}
