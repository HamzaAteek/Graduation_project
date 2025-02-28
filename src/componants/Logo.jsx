//إشاء كومبونانت لل لوغو افضل تنظيميا اذا تم استخدام اللوغو بعدة اماكن
import img from "../assets/images/react.svg";

const Logo = ({ text, className }) => {
  //استدعاء الصورة مع تمرير نص كبروبس وتمرير التنسيقات كبروبس
  return <img src={img} alt={text} className={`logo ${className}`} />; //اعطاء الصورة كلاسين واحد رئيسي والثاني يمرر كبروبس
};

export default Logo;
