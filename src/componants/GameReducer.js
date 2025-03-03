const GameReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };

    case "SET_GAME_QUERY":
      console.log(action.payload);
      return { ...state, gameQuery: { ...state.gameQuery, ...action.payload } };
    default:
      return state;
  }
};
export default GameReducer;
