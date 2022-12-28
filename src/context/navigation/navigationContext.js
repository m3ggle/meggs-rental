import { createContext, useContext, useReducer } from "react";
import navigationReducer from "./navigationReducer";

const NavigationContext = createContext({
  isOpen: null,
  menu: [
    {
      navigateTo: null,
      text: null,
      icon: null,
    },
  ],

  dispatchNavigation: () => {}
});
NavigationContext.displayName = "NavigationContext";

export function useNavigationContext() {
  return useContext(NavigationContext);
}

export const NavigationProvider = ({ children }) => {
  const initialState = {
    isOpen: false,
    menu: [
      {
        navigateTo: "/homepage",
        text: "Homepage",
        icon: "fa-solid fa-house"
      },
      {
        navigateTo: "/explore/map",
        text: "Explore Map",
        icon: "fa-solid fa-map"
      },
      {
        navigateTo: "/explore/catalog",
        text: "Explore Catalog",
        icon: "fa-solid fa-list"
      },
      {
        navigateTo: "/favorites",
        text: "Favorites",
        icon: "fa-solid fa-heart"
      },
      {
        navigateTo: "/user-offers",
        text: "Your Offers",
        icon: "fa-solid fa-file"
      },
      {
        navigateTo: "/upload",
        text: "Upload",
        icon: "fa-solid fa-plus"
      },
      {
        navigateTo: "/chat",
        text: "Chats",
        icon: "fa-solid fa-comments"
      },
      {
        navigateTo: "/profile",
        text: "Your Profile",
        icon: "fa-solid fa-user"
      },
    ],
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
