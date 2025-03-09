import { useNavigate } from "react-router-dom";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

//كومبونانت لتصميم الكرت الذي سنعرضه
const GameCard = ({ game }) => {
  const navigate = useNavigate(); //تعرف الدالة المسؤالة عن التحويل للصفحة المطلوبة
  return (
    <div
      onClick={() => {
        navigate(`../pages/CardDetails/${game.id}`); //عند الضغط على اي جزء من الكرت سيتم التحويل للصفحة مع ارسال رقم تعريف الركت المضغوط عليه
      }}
      className="max-w-sm cursor-pointer bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform translate-x-1 hover:scale-105 hover:shadow-md dark:hover:shadow-cyan-500 hover:shadow-slate-400"
    >
      {/* عرض الصورة */}
      <img
        className="rounded-t-lg w-full h-50"
        src={getCroppedImageUrl(game.background_image)} //استدعاء الدالة التي ستعرض الصورة بحجم محدد وتمرير رابط الصورة لها
        alt={game.name}
      />
      <div className="p-5 flex flex-col justify-between">
        {/* عرض اسم كل لعبة */}
        <div>
          <h5 className="mb-2 row-span-1 tracking-wide font-bold hover:underline text-gray-900 dark:text-white">
            {game.name}
          </h5>
        </div>
        <div className="flex justify-between items-center relative flex-wrap">
          {/* عرض المنصات التي تعمل عليها كل لعبة */}
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform) || []}
          />
          {/* عرض تقييم كل لعبة */}

          <div className="absolute bottom-2 right-2">
            <CriticScore score={game.metacritic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
