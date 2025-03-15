import { Link } from "react-router-dom";
import err from "../assets/images/error.svg";
import "../assets/styles/errors-pages.css";

const MainError = ({ text }) => {
  return (
    <div className="error-page">
      {/* Error Image */}
      <img src={err} alt="Error 404" className="img " />
      <p className="error-text">{text}</p>
      <Link to="/" className="link">
        Go Home
      </Link>
    </div>
  );
};
export default MainError;
