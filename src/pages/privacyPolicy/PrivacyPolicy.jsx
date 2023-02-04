import React, { useState } from "react";
import Btn from "../../components/common/Btn";
import FileUpload from "../../components/input/FileUpload";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  const [images, setImages] = useState([])
  
  const handleClick = async (data) => {
    // setImages(data);
    const test = "4 Seats"
    console.log(+test.split(" ")[0])
  };

  const handleUpload = async () => {
    if (images.length > 0) {
      const { data, error } = await supabase.storage
        .from("user-offers")
        .upload(`1238u0nk123-123-213-12312039uj/${images[0].name}`, images[0], {
          contentType: "image/webp",
          upsert: true,
        });
      
      console.log(data, error)
      return 
    }

    console.log("no images to upload")
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll">
      <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
          // onClick={handleUpload}
        />
      </div>
      <FileUpload filesCallback={handleClick} />
    </div>
  );
};

export default PrivacyPolicy;

// "Insufficient Arguments. Values needed to upload a vehicle: brand_name, category, color, fuel_type, transmission, vehicle_condition. Furthermore: vehicle_name, plate_number, amount_seats, trunk_volume, kilometer, eating_allowed, smoking_allowed, picture_urls."