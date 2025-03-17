import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../assets/styles/my-app.css";
import useSlides from "../hooks/useSlides";
import { useNavigate } from "react-router-dom";

const GameCarousel = ({ genres, genreName }) => {
  const { data } = useSlides(genres);
  const games = data?.pages[0]?.results;
  const navigate = useNavigate();
  return (
    <div className="game-carousel">
      <h2>{genreName}</h2>
      <Swiper
        key={genres}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3} // number of cards display in the same time
        loop={games?.length >= 3}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // automaticaly move every 3 second
        navigation // زرّي الانتقال
      >
        {games?.map((game) => (
          <SwiperSlide key={game.id}>
            <div
              onClick={() => {
                navigate(`../pages/CardDetails/${game.id}`); //when the card is clicked, the user will be navigated to the details page of the game
              }}
              className="game-cards"
            >
              <img src={game.background_image} alt={game.name} />
              <div className="name">
                <h3>{game.name}</h3>
                <h5>{game.released}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameCarousel;
