import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SignWrapper from "../../components/SignWrapper";
import { useMultiStepHelper } from "../../utilities/useMultiStepHelper";
import UploadBasicInfo from "./view/UploadBasicInfo";
import UploadCarSpec1 from "./view/UploadCarSpec1";
import UploadCarSpec2 from "./view/UploadCarSpec2";
import UploadCarSpec3 from "./view/UploadCarSpec3";
import UploadHeader from "./view/UploadHeader";
import UploadImgUpload from "./view/UploadImgUpload";
import UploadPrev from "./view/UploadPrev";

const Upload = () => {
  const { handleStorage, handleContinue, handleGoBack } = useMultiStepHelper();
  let [searchParams, setSearchParams] = useSearchParams();
  const currentRound = searchParams.get("round")
    ? +searchParams.get("round")
    : 1;
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get("round")) {
      searchParams.set("round", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);


  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "finish":
        localStorage.removeItem("uploadData");
        navigate("/homepage");
        break;
      case true:
        handleContinue();
        handleStorage(data, "uploadData");
        break;
      case "back":
        handleGoBack();
        break;
      case "close":
        localStorage.removeItem("uploadData");
        navigate("/user-offers");
        break;
      default:
        break;
    }
  };

  const renderComponent = () => {
    switch (currentRound) {
      case 1:
        return <UploadBasicInfo handleCallback={handleCallback} />;
      case 2:
        return <UploadCarSpec1 handleCallback={handleCallback} />;
      case 3:
        return <UploadCarSpec2 handleCallback={handleCallback} />;
      case 4:
        return <UploadCarSpec3 handleCallback={handleCallback} />;
      case 5:
        return <UploadImgUpload handleCallback={handleCallback} />;
      case 6:
        return <UploadPrev handleCallback={handleCallback} />;
      default:
        return "";
    }
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
        {renderComponent()}
      </div>
    </SignWrapper>
  );
};

export default Upload;
