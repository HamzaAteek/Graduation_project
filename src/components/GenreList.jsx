//كومبونانت لعرض انواع الالعاب التي على  اليسار
import { useContext } from "react";
import useGenres from "../hooks/useGenres";
import GameContext from "./GameContext";

const GenreList = () => {
  const { state, dispatch } = useContext(GameContext);
  const { data, isLoading } = useGenres();

  if (isLoading) return <div className="loader-genre fixed m-10"></div>;
  return (
    <div className="genre-list-container p-2">
      <div className="flex flex-col space-y-2">
        {data?.map((d) => (
          <div key={d.id} className="genre-item">
            <button
              className={`flex items-center justify-start text-sm p-3 w-full rounded-lg transition-colors duration-200 ${
                state?.gameQuery?.active === d.id
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() =>
                dispatch({
                  type: "SET_GAME_QUERY",
                  payload: {
                    selectGenre: state?.gameQuery?.active === d.id ? null : d,
                    active: state?.gameQuery?.active === d.id ? null : d.id,
                  },
                })
              }
            >
              <img
                src={d.image_background}
                alt={d.name}
                width={40}
                height={40}
                className="mr-3 rounded-md"
              />
              <span className="font-medium">{d.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
