import MainContent from "./componants/MainContent";
import SideBar from "./componants/SideBar";
import Nav from "./componants/Nav";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); //يوس ستايت خاصة لتخزيم وضعية الوضع الليلي سيتم جلب القيمة من المخزن المحلي

  //يوستايت شاملة لنظافة الكود
  const [gameQuery, setGameQuery] = useState({});

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

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); //دالة مهمتها عكس الثيم
  };

  return (
    <>
      <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* تغيير الخطود بناء على وضع الثيم */}
        <Nav
          toggleTheme={toggleTheme}
          theme={theme}
          onSearch={(selectSearchText) =>
            setGameQuery({ ...gameQuery, selectSearchText })
          }
        />
        <div className="grid grid-cols-6 p-2">
          {/* استدعاء الملف مع ارسال الدالة كبروبس للابن وغند الضغط يتم حفظ المعلومات باليوستايت الخاصة به */}
          <SideBar
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
          <MainContent
            selectGenre={gameQuery.genre}
            selectPlatform={gameQuery.platform}
            selectSortOrder={gameQuery.sortOrder}
            selectSearchText={gameQuery.selectSearchText}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
