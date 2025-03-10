//A component to display game icons that show the platforms the games run on.
import { GrPersonalComputer } from "react-icons/gr";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import "../styles/card.css";
const PlatformIconList = ({ platforms }) => {
  const iconMap = {
    //this object will store the name of the icon with the name of the icon that we will add
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
    <div className="platform-icon-list">
      {platforms?.map((platform) => {
        const Icon = iconMap[platform.slug]; //Here the icon corresponding to each name on the platform is called will fetch the name corresponding to the icon and call it from above.
        return Icon ? (
          <Icon key={platform.id} className="platform-icon" />
        ) : null;
      })}
    </div>
  );
};

export default PlatformIconList;
