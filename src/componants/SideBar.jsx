//كومبونانت لعرض الثائمة التي على اليسار
import GenreList from "./GenreList";

const SideBar = ({ onSelectGenre }) => {
  //تمرير الدالة كوسيط للابن
  return (
    <div className="col-span-1">
      <GenreList onSelectGenre={onSelectGenre} />
    </div>
  ); //استدعاء الكومبونانت الذي يحتوي على الانواع
};

export default SideBar;
