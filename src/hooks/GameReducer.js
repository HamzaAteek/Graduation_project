//my reducer
const GameReducer = (state, action) => {
  switch (action.type) {
    //change the theme value
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };
    //change the query state
    case "SET_GAME_QUERY":
      return { ...state, gameQuery: { ...state.gameQuery, ...action.payload } };
    default:
      return state;
  }
};
export default GameReducer;
