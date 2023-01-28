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
    ...templateState,
    // ! faked signed in user for production
    // userId: "80c5b2ee-f352-4fbd-be86-ccc46f59e2f4",
    // personalInformationId: "80c5b2ee-f352-4fbd-be86-ccc46f59e2f4",
    // preferredCityId: "ff02d42a-20c6-411e-842b-b4807876d8cd",
    // email: "megglebande@web.de",
    // userName: "m1ggle",
    // status: "active",
    // profilePictureUrl:
    //   "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/default-avatars/user-default-1.webp",
    // isOnline: "true",
    // lastOnline: "2023-01-25 12:13:26.545444+00",
    // createdAt: "2023-01-24 15:33:41.74803+00",
    // emailConfirmed: true,
    // phoneConfirmed: false,
    // phone: null,
  };

  const [state, dispatchUser] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};
