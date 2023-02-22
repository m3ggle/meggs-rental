import SignWrapper from "../../components/wrapper/SignWrapper";
import { useMultiStepHelper } from "../../hooks/useMultiStepHelper";
import useUploadCallback from "./hooks/useUploadCallback";
import UploadHeader from "./view/UploadHeader";
import UploadOfferAvailability from "./view/UploadOfferAvailability";
import UploadBasicInfo from "./view/UploadOfferBasics";
import UploadImgUpload from "./view/UploadOfferPictures";
import UploadPrev from "./view/UploadOfferPreview";
import UploadOfferPrices from "./view/UploadOfferPrices";
import UploadCarSpec1 from "./view/UploadVehicleDetails1";
import UploadCarSpec2 from "./view/UploadVehicleDetails2";
import UploadCarSpec3 from "./view/UploadVehicleDetails3";

const Upload = () => {
  const { currentRound } = useMultiStepHelper();
  const { handleCallback } = useUploadCallback();

  const renderComponent = {
    1: <UploadBasicInfo handleCallback={handleCallback} />,
    2: <UploadOfferPrices handleCallback={handleCallback} />,
    3: <UploadOfferAvailability handleCallback={handleCallback} />,
    4: <UploadCarSpec1 handleCallback={handleCallback} />,
    5: <UploadCarSpec2 handleCallback={handleCallback} />,
    6: <UploadCarSpec3 handleCallback={handleCallback} />,
    7: <UploadImgUpload />,
    // 7: <UploadImgUpload handleCallback={handleCallback} />,
  };

  const uploadBg =
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/picture-placeholders/germanStreet.webp";

  return (
    <>
      {/* <PageAuthChecker> */}
      <SignWrapper puffer={false} pic={uploadBg}>
        <div className="flex w-full max-w-[348px] flex-col gap-y-8">
          <UploadHeader
            handleCallback={handleCallback}
            maxRounds={7}
            currentRound={currentRound - 1}
          />
          {renderComponent[currentRound]}
        </div>
      </SignWrapper>
      {/* </PageAuthChecker> */}
    </>
  );
};

export default Upload;
