export const handlePreparationProfileAccount = ({ formData, userData }) => {
  delete formData.city;
  formData.smoker = formData.smoker === "Yes" ? true : false;
  formData.preferredCity = JSON.parse(
    localStorage.getItem("accountPreferredCity")
  );

  let modifiedUserData = {};
  Object.keys(formData).map((key) => (modifiedUserData[key] = userData[key]));

  return { modifiedUserData };
};
