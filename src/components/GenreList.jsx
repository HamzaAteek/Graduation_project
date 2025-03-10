//GenreList component that displays the list of genres available in the API
import { useContext } from "react";
import useGenres from "../hooks/useGenres"; //uses the useGenres hook to fetch the genres from the API
import GameContext from "../hooks/GameContext"; //uses the GameContext to update the state when a genre is selected.
import "../styles/side-bar.css";
const GenreList = () => {
  const { state, dispatch } = useContext(GameContext);
  const { data, error, isLoading } = useGenres();
  const genres = data?.pages[0]?.results; //extracts the genres from the data object
  //returns a list of genres with a button for each genre. When a genre is clicked, it updates the state with the selected genre.

  if (isLoading) return <div className="loader-genre"></div>; //loading spinner
  if (error)
    return (
      <div className="error-message" role="alert">
        <span className="font-medium">{error}</span>
      </div>
    );
  return (
    <div className="genre-list-container">
      {genres?.map((genre) => (
        <div key={genre.id}>
          <button
            className={`genre-button ${
              state?.gameQuery?.active === genre.id ? "active" : "not-active"
            }`}
            onClick={() =>
              dispatch({
                //send the selected genre to the state
                type: "SET_GAME_QUERY",
                payload: {
                  selectGenre:
                    state?.gameQuery?.active === genre.id ? null : genre,
                  //for remove active class when click on the same genre
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
            />
            <span className="font-medium">{genre.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
