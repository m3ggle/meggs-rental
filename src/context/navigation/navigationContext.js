import { createContext, useContext, useEffect, useReducer } from "react";
import { useUserContext } from "../user/userContext";
import navigationReducer from "./navigationReducer";
import {
  initialStateNavigation,
  navigationTemplate,
} from "./navigationTemplate";

// context
const NavigationContext = createContext({
  navigationTemplate,

  dispatchNavigation: () => {},
});

// for debugging
NavigationContext.displayName = "NavigationContext";

// for export
export function useNavigationContext() {
  return useContext(NavigationContext);
}

// provider
export const NavigationProvider = ({ children }) => {
  // hooks import
  const { signedIn, verified } = useUserContext();

  // reducer
  const [state, dispatchNavigation] = useReducer(
    navigationReducer,
    initialStateNavigation
  );

  // for icon indication
  useEffect(() => {
    const non = ["Homepage", "Explore Map", "Explore Catalog"];

    const newMenu = initialStateNavigation.menu.map((item) => {
      if (non.includes(item.text)) {
        return { ...item };
      }

      if (!signedIn || !verified) {
        return {
          ...item,
          icon: "fa-solid fa-lock",
        };
      }

      return { ...item };
    });

    dispatchNavigation({
      type: "SET_MENU",
      payload: newMenu,
    });
  }, [signedIn, verified]);

  // exporting provider
  return (
    <NavigationContext.Provider value={{ ...state, dispatchNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};
