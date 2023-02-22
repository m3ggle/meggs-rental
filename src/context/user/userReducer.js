import { templateState } from "./templateState";

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER_CONTEXT":
      return {
        ...payload,
      };
    case "SET_USER":
      return {
        ...state,
        userData: {
          ...state.userData,
          ...payload,
        },
      };
    case "SET_USER_CONTEXT_DEFAULT":
      return {
        ...templateState,
      };
    case "SET_USER_PROFILE_PICTURE_URL": 
      return {
        ...state,
        profilePictureUrl: payload,
      };

    default:
      break;
  }
};

export default userReducer;
