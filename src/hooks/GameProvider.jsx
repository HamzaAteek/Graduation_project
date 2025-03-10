import { useReducer } from "react";
import GameReducer from "./GameReducer";
import GameContext from "./GameContext";
export const GameProvider = ({ children }) => {
  const initialState = {
    //the initial state for use reducer
    theme: localStorage.getItem("theme") || "light", //the value in local storage or light
    gameQuery: {},
  };
  const [state, dispatch] = useReducer(GameReducer, initialState); //call use reducer

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameProvider;
