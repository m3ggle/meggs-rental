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

  return (
    <SignWrapper
      puffer={false}
      pic="https://images.unsplash.com/photo-1664286244753-7f5e25a2eb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    >
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
