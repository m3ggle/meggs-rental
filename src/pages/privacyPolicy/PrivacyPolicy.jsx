import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  // const handleClick = async () => {
  //   let { data: offerId, error } = await supabase.rpc("upload_offer", {
  //     amount_seats: 5,
  //     brand_name: "Fiat",
  //     category: "Sedan",
  //     city: "Dresden",
  //     color: "Black",
  //     country: "Germany",
  //     day_price: 50,
  //     eating_allowed: false,
  //     end_date: "12.12.2023",
  //     formatted: "Salzburger Straße 19",
  //     fuel_type: "Gasoline",
  //     house_number: "12",
  //     kilometer: 33000,
  //     latitude: formData.offerLocation.extraInfo.center.lat,
  //     longitude: formData.offerLocation.extraInfo.center.lng,
  //     month_price: +formData.monthPrice,
  //     offer_description: formData.offerDescription,
  //     offer_name: formData.offerName,
  //     picture_urls: null,
  //     plate_number: formData.plateNumber ?? null,
  //     province: formData.offerLocation.extraInfo.text.province,
  //     smoking_allowed: formData.smokingAllowed === "No" ? false : true,
  //     start_date: formData.startDate ?? null,
  //     street: formData.offerLocation.extraInfo.text.street,
  //     transmission: formData.transmission,
  //     trunk_volume: +formData.trunkVolume.split(" ")[0],
  //     uid: userId,
  //     vehicle_condition: formData.vehicleCondition,
  //     vehicle_name: formData.vehicleName,
  //     week_price: +formData.weekPrice,
  //   });

  //   console.log(offerId)
  // };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll p-3">
      <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          // onClick={handleClick}
        />
      </div>
    </div>
    // <div className="w-full h-screen flex justify-center items-center">work in progress</div>
  );
};

export default PrivacyPolicy;
