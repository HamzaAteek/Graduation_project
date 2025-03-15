//component to show the skeleton of the game card while loading the data
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; //skeleton library
import "../assets/styles/card.css";

const GameCardSkeleton = () => {
  return (
    <div className="game-card">
      {/* display image  */}
      <div className="rounded-t-lg w-full h-50">
        <Skeleton height={200} className="w-full h-full" />
      </div>
      <div className="game-info">
        {/* display title game place */}
        <h5 className="game-title">
          <Skeleton width={150} />
        </h5>
        {/* platform place */}
        <div className="game-details">
          <div className="platform">
            <Skeleton width={100} />
          </div>
          <div className="crirtic-div">
            <Skeleton width={40} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
