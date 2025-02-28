import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import RatingByEmojy from "./RatingByEmojy";

//كومبونانت لتصميم الكرت الذي سنعرضه
const GameCard = ({ game }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* عرض الصورة */}
      <a href="#">
        <img
          className="rounded-t-lg w-full h-50"
          src={getCroppedImageUrl(game.background_image)} //استدعاء الدالة التي ستعرض الصورة بحجم محدد وتمرير رابط الصورة لها
          alt=""
        />
      </a>
      <div className="p-5">
        {/* عرض اسم كل لعبة */}
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {game.name} <RatingByEmojy rating={game.rating_top} />
          </h5>
        </a>
        {/* عرض المنصات التي تعمل عليها كل لعبة */}
        <div className="flex justify-between items-center flex-wrap">
          <div className="platform">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <div className="score">
            <CriticScore score={game.metacritic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
