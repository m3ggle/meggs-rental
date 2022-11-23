import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../../../../../components/common/Btn";

const PreviewButtons = () => {
  return (
    <div className="flex w-full gap-x-2">
      <Link to="/offer-details" className="w-full">
        <Btn uiType="secondary" type="button" title="View full Offer" />
      </Link>
      <Link to="/chat" className="w-full">
        <Btn uiType="primary" type="button" title="Contact Owner" />
      </Link>
    </div>
  );
};

export default PreviewButtons;
