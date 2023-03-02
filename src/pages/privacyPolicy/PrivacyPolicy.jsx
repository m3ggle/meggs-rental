import { format, isWithinInterval } from "date-fns";
import React from "react";
import Btn from "../../components/common/Btn";
import supabase from "../../config/supabaseClient";

const PrivacyPolicy = () => {
  const handleClick = async () => {
let { data, error } = await supabase.rpc("get_user_offers_by_filter", {
  // amount_seats,
  // brand,
  // city,
  // color,
  // country,
  // day_end_price,
  // day_start_price,
  // east,
  // eating_allowed,
  // end_date,
  // fuel_type,
  // limit,
  // month_end_price,
  // month_start_price,
  // north,
  // offer_name,
  // offset,
  // province,
  // smoking_allowed,
  // south,
  // start_date,
  // transmission,
  // trunk_volume,
  user_id: "5a561f6d-cadb-4376-9ffb-7b7d6be88af0",
  // week_end_price,
  // week_start_price,
  // west,
});

if (error) console.error(error);
else console.log(data);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll p-3">
      <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
