//كومبونانت لعرض التقيمات كصور
import exeptional from "../assets/images/exeptional.png";
import recommended from "../assets/images/recommended.png";
import meh from "../assets/images/meh.webp";
import skip from "../assets/images/skip.png";

const RatingByEmojy = ({ rating }) => {
  const emojy = {
    2: { src: skip, alt: "skip" },
    3: { src: meh, alt: "meh" },
    4: { src: recommended, alt: "recommended" },
    5: { src: exeptional, alt: "exeptional" },
  };
  return <img {...emojy[rating]} width={25} />;
};

export default RatingByEmojy;
