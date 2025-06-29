import type { CharacterType } from "../types/CharacterType";

export const getRandomCharacter = (
  characters: CharacterType[],
  excludeIds: number[] = []
): CharacterType | null => {
  // Filter out characters whose id is in the exclude list
  const eligibleCharacters = characters.filter(
    (char) => !excludeIds.includes(char.id)
  );

  if (eligibleCharacters.length === 0) {
    return null; // TO DO  must have error handling later here
  }

  // Pick a random index from the filtered array
  const randomIndex = Math.floor(Math.random() * eligibleCharacters.length);
  return eligibleCharacters[randomIndex];
};
