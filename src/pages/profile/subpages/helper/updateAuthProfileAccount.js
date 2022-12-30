import { updateAuthDisplayName } from "./updateAuthDisplayName";
import { updateAuthEmail } from "./updateAuthEmail";
import { updateAuthPassword } from "./updateAuthPassword";
import { updateAuthPhoneNumber } from "./updateAuthPhoneNumber";

export const updateAuthProfileAccount = async ({
  formData,
  userData,
  newPassword,
  oldPassword,
}) => {
  // email additional logic
  if (formData.email !== userData.email) {
    const result = await updateAuthEmail({
      email: formData.email,
      password: oldPassword,
    });
    // result is undefined if everything goes alright and error or something else if there is a problem
    console.log("inside updateAuth: ", result);
    if (result !== undefined) {
      return result;
    }
  }

  console.log("going on");
  // password update
  if (newPassword !== null && oldPassword !== null) {
    await updateAuthPassword({
      email: formData.email,
      newPassword,
      oldPassword,
    });
  }

  // firstName
  if (formData.firstName !== userData.firstName) {
    await updateAuthDisplayName(formData.firstName);
    formData.displayName = formData.firstName;
  }

  // phoneNumber
  if (formData.phoneNumber !== userData.phoneNumber) {
    await updateAuthPhoneNumber(formData.phoneNumber);
  }
};
