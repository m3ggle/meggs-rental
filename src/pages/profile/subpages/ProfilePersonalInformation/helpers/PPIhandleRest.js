import { undefinedToNull } from "./undefinedToNull";

export const handleRest = (formData) => {
  formData = undefinedToNull(formData);

  formData.smoker = formData.smoker === "Yes" ? true : false;

  return formData;
};
