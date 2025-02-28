//هذا الكومبونانت الخاص بعرض الأسماء التي يتم الفلرتة بناء عليها
const GameHead = ({ selectGenre, selectPlatform, selectSortOrder }) => {
  const heading = `${selectGenre?.name || ""} ${selectPlatform?.name || ""} ${
    selectSortOrder || ""
  } Games`;
  return <h1>{heading}</h1>;
};

export default GameHead;
