//كومبونانت لعرض الثائمة التي على اليسار
import GenreList from "./GenreList";

const SideBar = () => {
  //تمرير الدالة كوسيط للابن
  return (
    <div className="col-span-1">
      <GenreList />
    </div>
  ); //استدعاء الكومبونانت الذي يحتوي على الانواع
};

export default SideBar;
