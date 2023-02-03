import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Btn from "../../components/common/Btn";
import AutocompleteWrapperCity from "../../components/wrapper/AutocompleteWrapperCity";
import supabase from "../../config/supabaseClient";
import ImageUpload from "./ImageUpload";

const PrivacyPolicy = () => {
  const handleClick = async () => { };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2">
      {/* <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div> */}
      <ImageUpload />
    </div>
  );
};

export default PrivacyPolicy;
