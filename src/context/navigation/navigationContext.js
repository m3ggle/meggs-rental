import { createContext, useContext, useReducer } from "react";
import navigationReducer from "./navigationReducer";

const NavigationContext = createContext();
NavigationContext.displayName = "NavigationContext";

export function useNavigationContext() {
  return useContext(NavigationContext);
}

export const NavigationProvider = ({ children }) => {
  const initialState = {
    isOpen: false,
  };

  const [state, dispatchNavigation] = useReducer(
    navigationReducer,
    initialState
  );

  return (
    <NavigationContext.Provider value={{ ...state, dispatchNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};
