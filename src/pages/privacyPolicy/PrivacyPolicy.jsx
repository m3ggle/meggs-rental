import React from "react";
import { useForm } from "react-hook-form";
import Btn from "../../components/common/Btn";
import MobileCatalogAutocomplete from "../../components/filter/MobileCatalogAutocomplete";

const PrivacyPolicy = () => {
  const { control, handleSubmit } = useForm();

  const handleClick = async () => {};

  const onSubmit = (data) => {
    // console.log(data);
  };

  const autocompleteCallback = (data) => {
    // console.log("autocomplete callback: ", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-screen w-full flex-col items-center justify-center gap-y-2"
    >
      <MobileCatalogAutocomplete
        definedActions="mapCatalog"
        control={control}
        callbackFunction={autocompleteCallback}
      />
      <div className="h-fit w-fit">
        <Btn
          type="submit"
          uiType="primary"
          title="Click to Search"
          // onClick={handleClick}
        />
      </div>
    </form>
  );
};

export default PrivacyPolicy;
