import { doc, getDoc } from "firebase/firestore";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import { db } from "../../firebase.config";

export const getUserFirestore = async (userId = "") => {
  const { notifyStandard } = toastNotify();

  const docSnap = await getDoc(doc(db, "users", userId));

  if (!docSnap.exists()) {
    notifyStandard({
      information: {
        type: "warning",
        content: "This user does not exist",
      },
      id: "standard",
    });
    return undefined;
  }

  const userData = docSnap.data();
  return userData;
};
