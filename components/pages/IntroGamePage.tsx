import { useGameInitialization } from "../../utils/useGameInitialization";
//components
import PageContainer from "../containers/PageContainer";
import IntroGameButton from "../buttons/IntroGameButton";

const IntroGamePage = () => {
  const { startNewGame, continueGame, hasGameInProgress, isLoading, error } =
    useGameInitialization();

  if (error)
    return (
      <PageContainer>
        <>"An error has occurred: " + {error.message}</>
      </PageContainer>
    );
  if (isLoading)
    return (
      <PageContainer>
        <>Loading</>
      </PageContainer>
    );
  return (
    <PageContainer>
      <div className="flex flex-col gap-0 items-center justify-center ">
        <div
          className={`text-6xl font-bold bg-linear-to-r from-portalsColor to-ricksHair bg-clip-text text-transparent py-4`}
        >
          Rick and Morty
        </div>
        <div
          className={`transition-all duration-1000 text-3xl font-extralight`}
        >
          Multiverse Mayhem
        </div>
      </div>

      <p className="text-center max-w-100 text-gray-700">
        Wubba Lubba Dub-Dub! Join Rick and Morty on a chaotic ride through
        infinite realities—solve bizarre puzzles, battle mutant clones, and
        outwit galactic overlords before the universe collapses in on itself…
        again.
      </p>

      <div className="grid gap-2">
        <IntroGameButton
          label="Start a new game!"
          onHandleClick={startNewGame}
        />
        {hasGameInProgress && (
          <IntroGameButton label="Load game!" onHandleClick={continueGame} />
        )}
      </div>
    </PageContainer>
  );
};
export default IntroGamePage;
