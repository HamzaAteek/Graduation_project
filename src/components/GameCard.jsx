//comonant to design the card that will be displayed
import { useNavigate } from "react-router-dom";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import "../assets/styles/card.css";

const GameCard = ({ game }) => {
  //this props will be passed to the component
  const navigate = useNavigate(); //the hook that will be used to navigate to another page
  return (
    <div
      onClick={() => {
        navigate(`../CardDetails/${game.id}`); //when the card is clicked, the user will be navigated to the details page of the game
      }}
      className="game-card"
    >
      {/* display the image */}
      <img
        className="game-image"
        src={getCroppedImageUrl(game.background_image)} //display the image of the game with width and height specified
        alt={game.name}
      />
      <div className="game-info">
        {/* display game */}
        <div>
          <h5 className="game-title">{game.name}</h5>
        </div>
        <div className="game-details">
          {/* platforms game */}
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform) || []}
          />
          {/* the critic for every game */}
          <div className="crirtic-div">
            <CriticScore score={game.metacritic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
