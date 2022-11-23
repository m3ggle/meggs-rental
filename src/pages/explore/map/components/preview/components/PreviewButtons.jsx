import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../../../components/common/Btn";

const PreviewButtons = ({ offerId }) => {
  const navigate = useNavigate();
  const handleViewOffer = () => navigate(`/offer-details/${offerId}`);

  const handleChat = () => {
    // check if logged in
    // check if the there is already a chat between the two
    navigate(`/chat`);
  }

  return (
    <div className="flex w-full gap-x-2">
      <Btn
        onClick={handleViewOffer}
        uiType="secondary"
        type="button"
        title="View full Offer"
      />
      <Btn
        onClick={handleChat}
        uiType="primary"
        type="button"
        title="Contact Owner"
      />
    </div>
  );
};

export default PreviewButtons;
