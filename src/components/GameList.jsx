import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

//كومبونانت لعرض الكروت
const GameList = () => {
  const { data, error, isLoading } = useGame(); //تمرير البروبس الذي يحتوي على المعلومات المفلترة لليوس جايم لجلب البيانات بطريقة مفلترة
  const skeletonCount = 11; //متغير نحدد من خلاله عدد الكروت الوهمية التي ستظهر ريثما يتم تحميل البيانات
  if (error)
    return (
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span className="font-medium">{error}</span>
      </div>
    );
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3">
        {isLoading ? ( //فحص المتغير هل قيمته ترو ام فولس
          Array.from({ length: skeletonCount })?.map(
            (
              _,
              index //إذا تحقق الشرط يتم انشاء حلقة لإنشاء عناصر بعدد معين
            ) => (
              <GameCardSkeleton key={index} /> //استدعاء كومبونانت السكيليتون
            )
          )
        ) : data?.length > 0 ? (
          data?.map((dd) => <GameCard key={dd.id} game={dd} />) //اذا لم يتحقق الشرط يتم استدعاء الكرت النظامي
        ) : (
          <div className="col-span-full text-5xl m-5 text-center text-gray-500">
            There is no Games
          </div>
        )}
      </div>
    </>
  );
};

export default GameList;
