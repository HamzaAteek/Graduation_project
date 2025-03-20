// Footer Component
import "../assets/styles/landing-page.css";
import rawg from "../assets/images/rawg_logo.jpeg";
import react from "../assets/images/react.svg";
import tailwind from "../assets/images/tailwind.png";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Information about this app:</h1>
      <h6>
        <img src={rawg} alt="" />
        This API from: <a href="https://rawg.io/">rawg website</a>{" "}
      </h6>
      <h6>
        <img src={react} alt="" />
        Build with React Library{" "}
      </h6>
      <h6>
        <img src={tailwind} alt="" />
        Use Tailwind Css for styling{" "}
      </h6>
    </div>
  );
};

export default Footer;
