//Landing page Component
import { Link } from "react-router-dom";
import "../assets/styles/landing-page.css";
import GameSlider from "../components/GameSlider";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
    <>
      <div className="body-page">
        <div className="overlay"></div>
        <div className="content">
          <h1>
            Welcome to our <span> Game App</span>
          </h1>
          <p>
            All games you need to play, thousands of games available for
            download, many different genres, running on many platforms, compete
            with friends, and discover new worlds.
          </p>
          <div className="buttons">
            <Link to={"/pages/MainContent"} className="btn primary">
              Discover our Games
            </Link>

            {/* <Link className="btn secondary">Log in</Link> */}
          </div>
        </div>
      </div>
      <div className="slider">
        <GameSlider genres={4} genreName={"Action Games"} />
      </div>
      <div className="slider">
        <GameSlider genres={10} genreName={"Strategy Games"} />
      </div>
      <div className="slider">
        <GameSlider genres={15} genreName={"Sports Games"} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
