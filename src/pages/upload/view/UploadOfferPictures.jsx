import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import FileUpload from "../../../components/input/FileUpload";

const UploadOfferPictures = ({ handleCallback }) => {
  const { handleSubmit } = useForm();

  const [files, setFiles] = useState([]);

  const onSubmit = async () => {
    const nextStep = "finish";
    handleCallback({ data: { pictureUrls: files }, nextStep });
  };

  const filesCallback = (images) => {
    setFiles(images);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <span className="text-base font-semibold text-lmGrey600 dark:text-dmGrey100">
          Offer Images
        </span>
        <FileUpload filesCallback={filesCallback} />
        <div className="flex w-full flex-col gap-y-1 text-xs text-lmGrey600 dark:text-dmGrey100">
          <span>
            *Make sure the order is correct. The first image is going to be the
            Thumbnail of your offer
          </span>
          <span>
            **We recommend:
            <br />
            first three images are images of the exterio the
            <br />
            last three images are images of the interio
          </span>
        </div>
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Upload"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
      />
    </form>
  );
};

export default UploadOfferPictures;


/*
amount_seats ----- formData.amountSeats,
brand_name ----- formData.brandName,
category ----- formData.category,
city ----- formData.offerLocation.extraInfo.text.city,
color  ----- formData.color,
country  ----- formData.offerLocation.extraInfo.text.country,
day_price  ----- formData.dayPrice,
eating_allowed ----- formData.eatingAllowed,
end_date ----- formData.endDate ?? null,
formatted  ----- formData.offerLocation.name,
fuel_type  ----- formData.fuelType,
house_number ----- formData.offerLocation.extraInfo.text.houseNumber,
kilometer  ----- formData.kilometer,
latitude ----- formData.offerLocation.extraInfo.center.lat,
longitude  ----- formData.offerLocation.extraInfo.center.lng,
month_price  ----- formData.monthPrice,
offer_description  ----- formData.offerDescription,
offer_name ----- formData.offerName,
picture_urls ----- formData.pictureUrls,
plate_number ----- formData.plateNumber ?? null,
province ----- formData.offerLocation.extraInfo.text.province,
smoking_allowed  ----- formData.smokingAllowed,
start_date ----- formData.startDate ?? null,
street ----- formData.offerLocation.extraInfo.text.street,
transmission ----- formData.transmission,
trunk_volume ----- formData.trunkVolume,
uid  ----- userId,
vehicle_condition  ----- formData.vehicleCondition,
vehicle_name ----- formData.vehicleName,
week_price ----- formData.weekPrice,
*/