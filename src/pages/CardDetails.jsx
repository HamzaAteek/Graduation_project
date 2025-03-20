//Card details component
import { FaStar } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCard from "../hooks/useCard";
import ScreenShootsGame from "../components/ScreenShootsGame";
import "../assets/styles/card-details.css";
import { useState } from "react";
import RatingByEmojy from "../components/RatingByEmojy";

const CardDetails = () => {
  const { id } = useParams(); //fetch the game id from link from the chossen card
  const { data, isLoading } = useCard(id); //fetch data
  const navigate = useNavigate();
  const game = data?.pages[0];

  //use state for (show more) button
  const [showMore, setShowMore] = useState(false);
  //fetch rating
  const rating = game?.rating_top;
  const noRating = 5 - rating;
  if (isLoading)
    return (
      <div className="loading-spinner">
        <div className="loader"></div>
      </div>
    );

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card-details">
      <div className="path">
        <Link to={"/"} className="games-link">
          My App
        </Link>
        <span>/</span>
        <Link to={"/pages/MainContent"} className="games-link">
          Games
        </Link>
        <span>/ Card Details</span>
      </div>
      <div className="lg:flex">
        {/* for display images slides */}
        <div className=" lg:w-1/2 ">
          <ScreenShootsGame id={id} />
        </div>

        {/* display rating */}
        <div className=" lg:w-1/2">
          <h1 className="game-name">{game?.name}</h1>
          <p className="game-release">Released: {game?.released}</p>
          <div className="game-rate">
            Rating:
            <div className="flex p-1">
              <div className="flex text-yellow-500">
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="stars">
                {[...Array(noRating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
          <p className="play-time">
            Play Time: <span>{game?.playtime}</span> Hours
          </p>
          <div className="flex mb-3">
            <RatingByEmojy rate={game?.ratings} />
          </div>
          <div className="genres-game">
            {game?.genres?.map((genre) => (
              <span key={genre?.id}>{genre?.name}</span>
            ))}
          </div>
        </div>
      </div>
      {/* display game platfroms */}

      <div className="game-platform">
        {game?.platforms?.map((platform) => (
          <span key={platform.platform.id}>{platform.platform.name}</span>
        ))}
      </div>
      <p className="game-desc">
        {showMore
          ? game?.description_raw
          : `${game?.description_raw?.substring(0, 100)}...`}
      </p>
      <button onClick={handleShowMore} className="show-more">
        {showMore ? "Show Less" : "Show More"}
      </button>
      <button
        onClick={() => navigate("/pages/MainContent")}
        className="back-game-button"
      >
        &#8678; Back to Games
      </button>
    </div>
  );
};

export default CardDetails;
