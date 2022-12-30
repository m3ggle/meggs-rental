export const handlePreparationProfileAccount = ({ formData, userData }) => {
  const oldPassword = formData.oldPassword;
  const newPassword = formData.newPassword;
  delete formData.oldPassword;
  delete formData.newPassword;
  delete formData.city;
  formData.smoker = formData.smoker === "Yes" ? true : false;
  formData.preferredCity = JSON.parse(
    localStorage.getItem("accountPreferredCity")
  );

  let modifiedUserData = {};
  Object.keys(formData).map((key) => (modifiedUserData[key] = userData[key]));

  return { newPassword, oldPassword, modifiedUserData };
};
