//Component to display ratings images
import exeptional from "../assets/images/exeptional.png";
import recommended from "../assets/images/recommended.png";
import meh from "../assets/images/meh.webp";
import skip from "../assets/images/skip.png";
import "../assets/styles/card-details.css";
const RatingByEmojy = ({ rate }) => {
  const emojy = {
    //this object for optimization
    skip: { src: skip, alt: "skip" },
    meh: { src: meh, alt: "meh" },
    recommended: { src: recommended, alt: "recommended" },
    exceptional: { src: exeptional, alt: "exeptional" },
  };
  return (
    <>
      {rate.map((rating) => (
        <div key={rating.id} className="emojy">
          <img {...emojy[rating.title]} width={25} />
          <p>{rating.count}</p>
        </div>
      ))}
    </>
  );
};

export default RatingByEmojy;
