import React from "react";
import { useForm } from "react-hook-form";
import MobileCatalogAutocomplete from "../../components/filter/MobileCatalogAutocomplete";
import { OfferNameAutocomplete } from "../../components/filter/OfferNameAutocomplete";

const PrivacyPolicy = () => {
  const { control } = useForm();

  const handleClick = async () => {};

  const handleCallback = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll">
      {/* <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div> */}

      <MobileCatalogAutocomplete
        control={control}
        callbackFunction={handleCallback}
      />

      <OfferNameAutocomplete
        control={control}
        callbackFunction={handleCallback}
      />
    </div>
  );
};

export default PrivacyPolicy;
