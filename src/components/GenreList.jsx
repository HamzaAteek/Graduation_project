//كومبونانت لعرض انواع الالعاب التي على  اليسار
import { useContext } from "react";
import useGenres from "../hooks/useGenres";
import GameContext from "../hooks/GameContext";

const GenreList = () => {
  const { state, dispatch } = useContext(GameContext);
  const { data, error, isLoading } = useGenres();
  const genres = data?.pages[0]?.results;

  if (isLoading) return <div className="loader-genre fixed m-10"></div>;
  if (error)
    return (
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">{error}</span>
      </div>
    );
  return (
    <div className="genre-list-container p-1">
      <div className="flex flex-col space-y-2">
        {genres?.map((genre) => (
          <div key={genre.id} className="genre-item">
            <button
              className={`flex flex-col md:flex-row items-center md:justify-start justify-center text-xs p-1 w-full rounded-lg transition-colors duration-200 ${
                state?.gameQuery?.active === genre.id
                  ? "bg-green-300 text-black shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() =>
                dispatch({
                  type: "SET_GAME_QUERY",
                  payload: {
                    selectGenre:
                      state?.gameQuery?.active === genre.id ? null : genre,
                    active:
                      state?.gameQuery?.active === genre.id ? null : genre.id,
                  },
                })
              }
            >
              <img
                src={genre.image_background}
                alt={genre.name}
                width={40}
                height={40}
                className="mb-2 md:mr-4 rounded-md"
              />
              <span className="font-medium">{genre.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
