import { useNavigate, useParams } from "react-router-dom";
import useCard from "../hooks/useCard";
import "../styles/information.css";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import RatingByEmojy from "./RatingByEmojy";

const CardDetails = () => {
  const { id } = useParams();
  const { data: game, isLoading } = useCard(id);
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const rating = game?.rating_top;
  const noRating = 5 - rating;
  if (isLoading)
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="loader"></div>
      </div>
    );

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card-details max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="lg:flex">
        <div className="carousel__container w-full lg:w-1/2 my-4 mr-6">
          <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li
                id="carousel__slide1"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <img
                    src={game?.background_image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <a href="#carousel__slide2" className="carousel__prev">
                    Go to last slide
                  </a>
                  <a href="#carousel__slide2" className="carousel__next">
                    Go to next slide
                  </a>
                </div>
              </li>
              <li
                id="carousel__slide2"
                tabIndex="0"
                className="carousel__slide"
              >
                <div className="carousel__snapper">
                  <img
                    src={game?.background_image_additional}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <a href="#carousel__slide1" className="carousel__prev">
                  Go to previous slide
                </a>
                <a href="#carousel__slide1" className="carousel__next">
                  Go to next slide
                </a>
              </li>
            </ol>
            <aside className="carousel__navigation">
              <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide1"
                    className="carousel__navigation-button"
                  ></a>
                </li>
                <li className="carousel__navigation-item">
                  <a
                    href="#carousel__slide2"
                    className="carousel__navigation-button"
                  ></a>
                </li>
              </ol>
            </aside>
          </section>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl mb-6 font-bold text-gray-900 dark:text-white mt-4">
            {game?.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Released: {game?.released}
          </p>
          <div className="text-gray-600 flex dark:text-gray-300 text-sm mb-4">
            Rating:
            <div className="flex p-1">
              <div className="flex text-yellow-500">
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="flex dark:text-gray-200 text-gray-400">
                {[...Array(noRating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Play Time: {game?.playtime} Hours
          </p>
          <div className="flex mb-3">
            <RatingByEmojy rate={game?.ratings} />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {game?.genres?.map((genre) => (
              <span
                key={genre?.id}
                className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg"
              >
                {genre?.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4 pr-6 sm:w-1/2 md:w-3/4">
        {game?.platforms?.map((platform) => (
          <span
            key={platform.platform.id}
            className="px-3 py-1 bg-gray-700 text-white text-xs rounded-lg"
          >
            {platform.platform.name}
          </span>
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm pr-6 w-3/4">
        {showMore
          ? game?.description_raw
          : `${game?.description_raw?.substring(0, 100)}...`}
      </p>
      <button
        onClick={handleShowMore}
        className="text-blue-500 block hover:underline"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Back to Games
      </button>
    </div>
  );
};

export default CardDetails;
