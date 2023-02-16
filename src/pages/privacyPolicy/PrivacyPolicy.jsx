import React from "react";

const PrivacyPolicy = () => {
  return (
    // <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll">
    //   <div className="h-fit w-fit">
    //     <Btn
    //       title="Click Me"
    //       type="button"
    //       uiType="primary"
    //       onClick={handleClick}
    //     />
    //   </div>
    // </div>
    <div className="h-fit w-full flex flex-col">
      <section className="flex h-screen w-full bg-green-400 p-8">
        <div className="sticky top-4 flex h-48 w-full items-center justify-center rounded-lg bg-green-700 text-4xl font-medium text-white shadow-lg">
          top-0
        </div>
      </section>
      <section className="flex h-screen w-full items-end bg-blue-400 p-8">
        <div className="sticky bottom-4 flex h-48 w-full items-center justify-center rounded-lg bg-blue-700 text-4xl font-medium text-white shadow-lg">
          bottom-0
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

// "Insufficient Arguments. Values needed to upload a vehicle: brand_name, category, color, fuel_type, transmission, vehicle_condition. Furthermore: vehicle_name, plate_number, amount_seats, trunk_volume, kilometer, eating_allowed, smoking_allowed, picture_urls."
