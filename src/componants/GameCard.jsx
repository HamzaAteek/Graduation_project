import { useNavigate } from "react-router-dom";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import RatingByEmojy from "./RatingByEmojy";

//كومبونانت لتصميم الكرت الذي سنعرضه
const GameCard = ({ game }) => {
  const navigate = useNavigate(); //تعرف الدالة المسؤالة عن التحويل للصفحة المطلوبة
  return (
    <div
      onClick={() => {
        navigate(`/CardDetails/${game.id}`); //عند الضغط على اي جزء من الكرت سيتم التحويل للصفحة مع ارسال رقم تعريف الركت المضغوط عليه
      }}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      {/* عرض الصورة */}
      <img
        className="rounded-t-lg w-full h-50"
        src={getCroppedImageUrl(game.background_image)} //استدعاء الدالة التي ستعرض الصورة بحجم محدد وتمرير رابط الصورة لها
        alt=""
      />
      <div className="p-5 flex flex-col justify-between">
        {/* عرض اسم كل لعبة */}
        <h5 className="mb-2 row-span-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {game.name}
        </h5>
        {/* <div className="row-span-2">
          <RatingByEmojy rating={game.rating_top} />
        </div> */}
        {/* عرض المنصات التي تعمل عليها كل لعبة */}
        <div className="flex justify-between items-center flex-wrap">
          <div className="platform">
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform) || []}
            />
          </div>
          <div className="score">
            {game.metacritic ? (
              <CriticScore score={game.metacritic} />
            ) : (
              <span>Not rating</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
