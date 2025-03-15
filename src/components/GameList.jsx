//component for display the cards
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import "../assets/styles/card.css";
const GameList = () => {
  const {
    //extract the tools from the hook.
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGame();

  const skeletonCount = 11; //a variable that determines the number of virtual cards that will appear while the data is being loaded.

  if (error)
    return (
      <div className="error-message" role="alert">
        <span className="font-medium">{error}</span>
      </div>
    );
  return (
    <>
      <div className="game-list">
        {/* if the loading proccess still working */}
        {isLoading
          ? Array.from({ length: skeletonCount })?.map((_, index) => (
              <GameCardSkeleton key={index} /> //call skeleton component
            ))
          : data?.pages?.map((page) =>
              page.results.length > 0 ? (
                page.results.map((dd) => <GameCard key={dd.id} game={dd} />) //if the condition not true will call Game Card component
              ) : (
                <div className="no-game">There is no Games</div>
              )
            )}
      </div>
      {/* If there are still pages available */}
      {hasNextPage && (
        <div className="view-more">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="view-more-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
            {/* Select text based on download status */}
            {isFetchingNextPage ? "Loading..." : "View More"}
          </button>
        </div>
      )}
    </>
  );
};

export default GameList;
