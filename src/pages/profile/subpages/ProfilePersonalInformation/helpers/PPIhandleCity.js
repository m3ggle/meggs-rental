import { handlePreferredCity } from "../../../../authentication/signUp/helpers/handlePreferredCity";

export const handleCity = (formData) => {
  if (!formData.city) {
    delete formData.city;
    formData.preferredCity = {};
    return formData;
  }

  const preferredCity =
    JSON.parse(localStorage.getItem("personalInformationPreferredCity")) ??
    undefined;
  if (!preferredCity) {
    delete formData.city;
    formData.preferredCity = {};
    return formData;
  }

  formData.preferredCity = handlePreferredCity(preferredCity);

  delete formData.city;
  return formData;
};
