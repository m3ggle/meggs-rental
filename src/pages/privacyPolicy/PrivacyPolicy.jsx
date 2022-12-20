import React from "react";
import Btn from "../../components/common/Btn";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase.config";
import ExampleData from "../../ExampleData";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const { firestoreFormattedOffer } = ExampleData();

const PrivacyPolicy = () => {
  const { offerId } = firestoreFormattedOffer
  
  const storage = getStorage();

  const handleBtnClick = async () => {
    const user = {
      userId: "85c48b9a-32f8-4279-9c89-3a459455d994",
    };
    console.log();
   }
  // const handleBtnClick = async () => {
  //   try {
  //     await setDoc(doc(db, "offers", offerId), firestoreFormattedOffer);
  //   } catch (error) {
  //     console.log("sorry", error)
  //   }
  //  }


  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          onClick={handleBtnClick}
          type="button"
          uiType="primary"
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
