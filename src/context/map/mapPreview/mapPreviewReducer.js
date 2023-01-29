import { mapPreviewTemplate } from "./mapPreviewTemplate";

const mapPreviewReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DEFAULT":
      return {
        ...mapPreviewTemplate,
      };
    case "SET_PREVIEW":
      return {
        ...state,
        ...payload,
      };

    default:
      break;
  }
};

export default mapPreviewReducer;
