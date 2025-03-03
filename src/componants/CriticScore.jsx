//كوبونانت لعرض التقييمات

const CriticScore = ({ score }) => {
  //يتم تلوين العنصر بناء على تصنيفه
  // var color = score > 90 ? "orange" : score > 85 ? "yellow" : "";
  const colorClass =
    score > 90
      ? "bg-green-300 text-green-900 dark:bg-green-900 dark:text-green-300"
      : score > 85
      ? "bg-yellow-300 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-300"
      : "bg-red-300 text-red-900 dark:bg-red-900 dark:text-red-300";
  return (
    <span
      className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${colorClass}`}
    >
      {score}
    </span>
  );
};

export default CriticScore;
