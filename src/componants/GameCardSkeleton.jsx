//كومبونانت خاص لعرض السكيليتون العناصر اتلوهمية مكان العناصر الأساسية بينما يتم تحميلها
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameCardSkeleton = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* عرض الصورة */}
      <div className="rounded-t-lg w-full h-50">
        <Skeleton height={200} className="w-full h-full" />
      </div>
      <div className="p-5">
        {/* عرض اسم اللعبة */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Skeleton width={150} />
        </h5>
        {/* عرض المنصات التي تعمل عليها كل لعبة */}
        <div className="flex justify-between items-center">
          <div className="platform">
            <Skeleton width={100} />
          </div>
          <div className="score">
            <Skeleton width={40} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
