import { toastNotify } from "../../../../../components/toastNotify/toastNotify";
import { useUserContext } from "../../../../../context/user/userContext";
import { jsToSqlObject } from "../../../../../helpers/sqlToJsSyntax";
import { handleCity } from "../helpers/PPIhandleCity";
import { handleCompare } from "../helpers/PPIhandleCompare";
import { handleRest } from "../helpers/PPIhandleRest";
import { useUpdatePersonalInformation } from "./useUpdatePersonalInformation";
import { useUpdatePreferredCity } from "./useUpdatePreferredCity";

export const usePPIOnSubmit = (initialUserData) => {
  const { userId } = useUserContext();
  const { notifyStandard } = toastNotify();
  const { updatePreferredCity } = useUpdatePreferredCity();
  const { updatePersonalInformation } = useUpdatePersonalInformation();

  const onSubmit = (formData) => {
    if (formData.target) {
      return; // protection i guess
    }

    // preparation
    formData = handleCity(formData);
    formData = handleRest(formData);
    formData.uid = userId;

    // preferred city specific
    if (Object.keys(formData.preferredCity).length > 0) {
      updatePreferredCity.mutate({
        uid: formData.uid,
        ...formData.preferredCity,
      });
    }

    // prepare for comparison 
    delete formData.preferredCity;
    initialUserData.uid = initialUserData.userId ?? initialUserData.uid;
    delete initialUserData.userId;

    // compare
    const isSame = handleCompare(formData, initialUserData);

    // if the user changed something, update the db
    if (!isSame) {
      updatePersonalInformation.mutate(jsToSqlObject(formData));
      return;
    }

    // nothing change notification
    notifyStandard({
      information: {
        type: "info",
        content: "No changes were made.",
      },
      id: "personalInformationFD",
    });
  };

  return { onSubmit };
};
