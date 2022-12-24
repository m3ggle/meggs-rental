import React from "react";
import Btn from "../../components/common/Btn";
import { useNotifyModalContext } from "../../context/notifyModal/notifyModalContext";

const PrivacyPolicy = () => {
  const { dispatchNotifyModal } = useNotifyModalContext();

  const desktopPhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FthreeCars.webp?alt=media&token=51d51fb2-414d-44a4-a549-40a36666b7cb";
  const mobilePhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2Fmoped.webp?alt=media&token=c3fbae96-06a8-4121-9067-25ca1dcea4af";

  const handleClick = () => {
    dispatchNotifyModal({
      type: "SET_NOTIFY_MODAL",
      payload: {
        isOpen: true,
        preMade: "signIn",
        photoUrl: {
          desktop: desktopPhotoUrl,
          mobile: mobilePhotoUrl,
        },
      },
    });
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2">
      <div className="h-fit w-fit">
        <Btn
          title="click to open"
          uiType="primary"
          type="button"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
