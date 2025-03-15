//Component for display the screen shoot images
import useCardScreenShots from "../hooks/useCardScreenShots";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; //Library for slice the images to slides
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ScreenShootsGame = ({ id }) => {
  const { data, isLoading } = useCardScreenShots(id);
  const screenShots = data?.pages[0]?.results;

  if (!screenShots || screenShots.length === 0)
    //condition if there are not avilable images
    return <p>No screenshots available</p>;

  return (
    <div className="relative m-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} //change the images every 5 second
        className="rounded-md"
      >
        {screenShots.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.image}
              className="block rounded-md"
              alt={`Screenshot image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScreenShootsGame;
