import MainContent from "./componants/MainContent";
import SideBar from "./componants/SideBar";
import Nav from "./componants/Nav";
import { useContext, useEffect } from "react";
import GameContext from "./componants/GameContext";
function App() {
  const { state } = useContext(GameContext);
  const { theme } = state;

  const root = document.documentElement; //تخزين الصفحة الكاملة بهذا المتغير

  useEffect(() => {
    if (theme === "dark") {
      //فحص اذا كان الوضع المتغير هو ليلي
      root.classList.add("dark"); //إعطاء كلاس للعنصر الأب لكل الصفحة اسمه دارك
    } else {
      root.classList.remove("dark"); //اذا لم يكن اسمه دارك احذف هذه الكلاس
    }
    localStorage.setItem("theme", theme); //خزن بالمخزن المحلي المفتاح اسمه ثيم وقيمته القيمة الموجودة باليوس ستايت
  }, [theme]); //اعطينا قيمة الثيم للديبيدينسي

  return (
    <>
      <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Nav />
        <div className="grid grid-cols-6 p-2">
          <SideBar />
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
