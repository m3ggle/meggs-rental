import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignWrapper from "../../components/SignWrapper";
import { useSignStateData } from "../../hooks/useSignStateData";
import UploadBasicInfo from "./view/UploadBasicInfo";
import UploadCarSpec1 from "./view/UploadCarSpec1";
import UploadCarSpec2 from "./view/UploadCarSpec2";
import UploadCarSpec3 from "./view/UploadCarSpec3";
import UploadHeader from "./view/UploadHeader";
import UploadImgUpload from "./view/UploadImgUpload";
import UploadPrev from "./view/UploadPrev";

const Upload = () => {
  // dataCollection should be stored inside the url
  const { storeDataInState } = useSignStateData();
  const [currentRound, setCurrentRound] = useState(0);

  const navigate = useNavigate();

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "finished":
        storeDataInState(data);
        navigate("/homepage");
        break;
      case true:
        storeDataInState(data);
        setCurrentRound((prevState) => prevState + 1);
        break;
      case "back":
        setCurrentRound((prevState) => prevState - 1);
        break;
      case "close": 
        navigate("/user-offers");
        break;
      default:
        break;
    }
  };

  const renderComponent = () => {
    switch (currentRound) {
      case 0:
        return <UploadBasicInfo handleCallback={handleCallback} />;
      case 1:
        return <UploadCarSpec1 handleCallback={handleCallback} />;
      case 2:
        return <UploadCarSpec2 handleCallback={handleCallback} />;
      case 3:
        return <UploadCarSpec3 handleCallback={handleCallback} />;
      case 4:
        return <UploadImgUpload handleCallback={handleCallback} />;
      case 5:
        return <UploadPrev handleCallback={handleCallback} />;
      default:
        return "";
    }
  };

  return (
    <SignWrapper
      puffer={false}
      pic="https://images.unsplash.com/photo-1628437255792-911a5d23097e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    >
      <div className="flex w-full max-w-[348px] flex-col gap-y-8">
        <UploadHeader
          handleCallback={handleCallback}
          maxRounds={6}
          currentRound={currentRound}
        />
        {renderComponent()}
      </div>
    </SignWrapper>
  );
};

export default Upload;
