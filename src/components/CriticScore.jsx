//component to display the critic score of a movie
import "../assets/styles/card.css";
const CriticScore = ({ score }) => {
  //color of the score based on the score value
  const colorClass =
    score > 90 ? "more-than-90" : score > 85 ? "more-than-85" : "less-than-85";
  return (
    <span className={`score-text ${colorClass}`}>
      {score ? score : "No Rating"}
    </span>
  );
};

export default CriticScore;
