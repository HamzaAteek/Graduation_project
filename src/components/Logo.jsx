//logo component
import img from "../assets/images/logo.webp";

const Logo = ({ text, className }) => {
  //handel the text and the class
  return <img src={img} alt={text} className={`logo ${className}`} />; //return the image with the text and the class
};

export default Logo;
