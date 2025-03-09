import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

//كومبونانت لعرض الكروت
const GameList = () => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGame(); //تمرير البروبس الذي يحتوي على المعلومات المفلترة لليوس جايم لجلب البيانات بطريقة مفلترة
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
        {isLoading //فحص المتغير هل قيمته ترو ام فولس
          ? Array.from({ length: skeletonCount })?.map(
              (
                _,
                index //إذا تحقق الشرط يتم انشاء حلقة لإنشاء عناصر بعدد معين
              ) => (
                <GameCardSkeleton key={index} /> //استدعاء كومبونانت السكيليتون
              )
            )
          : data?.pages?.map((page) =>
              page.results.length > 0 ? (
                page.results.map((dd) => <GameCard key={dd.id} game={dd} />) //اذا لم يتحقق الشرط يتم استدعاء الكرت النظامي
              ) : (
                <div className="col-span-full text-5xl m-5 text-center text-gray-500">
                  There is no Games
                </div>
              )
            )}
      </div>
      {hasNextPage && (
        <div className="my-24 flex items-center before:flex-1 before:h-px hover:before:bg-gray-700 dark:before:bg-white dark:after:bg-white before:bg-gray-700 after:flex-1 after:h-px after:bg-gray-700">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="flex items-center rounded-full border dark:border-white border-gray-700 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white dark:text-white dark:hover:text-gray-900 dark:hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
            {isFetchingNextPage ? "Loading..." : "View More"}
          </button>
        </div>
      )}
    </>
  );
};

export default GameList;
