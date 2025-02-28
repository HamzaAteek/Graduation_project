import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

//كومبونانت لعرض الكروت
const GameList = ({
  selectGenre,
  selectPlatform,
  selectSortOrder,
  selectSearchText,
}) => {
  const { data, error, isloading } = useGame(
    selectGenre,
    selectPlatform,
    selectSortOrder,
    selectSearchText
  ); //تمرير البروبس الذي يحتوي على المعلومات المفلترة لليوس جايم لجلب البيانات بطريقة مفلترة
  //   const { games, error, isloading } = useGame(); //فك الداتا التي صلنا عليها من الملف التنظيمي بدل كتابة نفس الكود اكتر من مرة

  const skeletonCount = 11; //متغير نحدد من خلاله عدد الكروت الوهمية التي ستظهر ريثما يتم تحميل البيانات
  return (
    <>
      {error && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">{error}</span>
        </div>
      )}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          isloading //فحص المتغير هل قيمته ترو ام فولس
            ? Array.from({ length: skeletonCount }).map(
                (
                  index //إذا تحقق الشرط يتم انشاء حلقة لإنشاء عناصر بعدد معين
                ) => (
                  <GameCardSkeleton key={index} /> //استدعاء كومبونانت السكيليتون
                )
              )
            : data.map((dd) => <GameCard key={dd.id} game={dd} />) //اذا لم يتحقق الشرط يتم استدعاء الكرت النظامي
        }
      </div>
    </>
  );
};

export default GameList;
