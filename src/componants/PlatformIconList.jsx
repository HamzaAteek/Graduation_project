//كومبونانت خاص لعرض الاأيقونات الخاصة بالألعاب التي تظهر المنصات التي تعمل عليها الألعاب
import { GrPersonalComputer } from "react-icons/gr";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";

const PlatformIconList = ({ platforms }) => {
  const iconMap = {
    //عرفنا اوبجكت لكي نخزن فيه كل اسم ايقونة بالأي بي اي مقابله باسم الايقونة التي سنضيفها
    pc: GrPersonalComputer,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <div className="flex space-x-2 my-2">
        {platforms.map((platform) => {
          //استخدمنا حلقة للمرور على كل العناصر
          const Icon = iconMap[platform.slug];
          return <Icon key={platform.id} className="w-6 h-6 text-gray-600" />; //هنا تم استدعاء الأيقونة المقابلة لكل اسم موجود بالبلاتفورم.سلاج سيجلب الاسم المقابل للأيقونة ويتم استدعاؤها من فوق
        })}
      </div>
    </>
  );
};

export default PlatformIconList;
