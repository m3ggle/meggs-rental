import { createContext, useContext, useReducer } from "react";
import darkModeReducer from "./darkModeReducer";

const DarkModeContext = createContext();
DarkModeContext.displayName = "DarkModeContext";

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}

export const DarkModeProvider = ({ children }) => {
  const initialState = {
    darkMode: false,
  };

  const [state, dispatchDarkMode] = useReducer(darkModeReducer, initialState);

  return (
    <DarkModeContext.Provider value={{ ...state, dispatchDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
