import { createContext, useContext, useReducer } from "react";
import userReducer from "./userReducer";

const templateState = {
  verified: null,
  signedIn: null,
  userData: {
    birthday: null,
    chatRooms: [],
    displayName: null,
    email: null,
    favoriteOffers: [],
    firstName: null,
    gender: null,
    lastName: null,
    lastViewedOffers: [],
    ownOffers: [],
    phoneNumber: null,
    photoUrl: null,
    preferredCity: {
      bounds: {
        east: null,
        north: null,
        south: null,
        west: null,
      },
      center: {
        lat: null,
        lng: null,
      },
      name: null,
    },
    smoker: null,
    status: null,
    timeStamp: null,
    uid: null,
  },
};

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
  };

  const [state, dispatchUser] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};
