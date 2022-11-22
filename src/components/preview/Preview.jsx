import React from "react";
import { Link } from "react-router-dom";
import ExampleData from "../../ExampleData";
import Btn from "../common/Btn";
import Calendar from "../offerDetails/Calendar";
import UserProfileSmall from "../userProfile/UserProfileSmall";
import PreviewBasicInfo from "./components/PreviewBasicInfo";
import PreviewButtons from "./components/PreviewButtons";
import PreviewIcons from "./components/PreviewIcons";
import PreviewImgs from "./components/PreviewImgs";
import PreviewOwner from "./components/PreviewOwner";

const { carSpecData } = ExampleData();

const Preview = ({ offerInformation }) => {
  return (
    <div className="relative flex h-[640px] w-[360px] max-w-[360px] flex-col gap-y-2 overflow-scroll rounded-2xl bg-white p-6 shadow-xl dark:bg-dmGrey900">
      <PreviewIcons />
      <PreviewBasicInfo />
      <PreviewImgs />
      <div className="min-h-fit">
        <Calendar shadow={true} header={true} />
      </div>
      {/* <CarSpecWrapper amount="preview" specs={carSpecData} mobile={false} /> */}
      <PreviewOwner />
      <PreviewButtons />
    </div>
  );
};

export default Preview;
