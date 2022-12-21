import SignWrapper from "../../components/wrapper/SignWrapper";
import { useMultiStepHelper } from "../../hooks/useMultiStepHelper";
import useUploadCallback from "./hooks/useUploadCallback";
import UploadBasicInfo from "./view/UploadBasicInfo";
import UploadCarSpec1 from "./view/UploadCarSpec1";
import UploadCarSpec2 from "./view/UploadCarSpec2";
import UploadCarSpec3 from "./view/UploadCarSpec3";
import UploadHeader from "./view/UploadHeader";
import UploadImgUpload from "./view/UploadImgUpload";
import UploadPrev from "./view/UploadPrev";

const Upload = () => {
  const { currentRound } = useMultiStepHelper();
  const { handleCallback } = useUploadCallback();

  const renderComponent = {
    1: <UploadBasicInfo handleCallback={handleCallback} />,
    2: <UploadCarSpec1 handleCallback={handleCallback} />,
    3: <UploadCarSpec2 handleCallback={handleCallback} />,
    4: <UploadCarSpec3 handleCallback={handleCallback} />,
    5: <UploadImgUpload handleCallback={handleCallback} />,
    6: <UploadPrev handleCallback={handleCallback} />,
  };

  const uploadBg =
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FgermanStreet.webp?alt=media&token=299dade6-a4d2-40cc-a099-cfb97431bec1";

  return (
    <SignWrapper puffer={false} pic={uploadBg}>
      <div className="flex w-full max-w-[348px] flex-col gap-y-8">
        <UploadHeader
          handleCallback={handleCallback}
          maxRounds={6}
          currentRound={currentRound - 1}
        />
        {renderComponent[currentRound]}
      </div>
    </SignWrapper>
  );
};

export default Upload;
