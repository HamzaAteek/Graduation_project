import { useReducer } from "react";
import GameReducer from "./GameReducer";
import GameContext from "./GameContext";
export const GameProvider = ({ children }) => {
  const initialState = {
    theme: localStorage.getItem("theme") || "light",
    gameQuery: {},
  };
  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameProvider;
