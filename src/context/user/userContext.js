import { createContext, useContext, useReducer } from "react";
import { templateState } from "./templateState";
import userReducer from "./userReducer";

const UserContext = createContext({
  ...templateState,

  dispatchUser: () => {},
});
UserContext.displayName = "UserContext";

export function useUserContext() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const initialState = {
    signedIn: false,
    verified: false,
    userData: null,
  };

  const [state, dispatchUser] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};
