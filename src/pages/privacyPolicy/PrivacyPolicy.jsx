import { format, isWithinInterval } from "date-fns";
import React from "react";
import Btn from "../../components/common/Btn";

const PrivacyPolicy = () => {
  const handleClick = async () => {
      const dateInQuestion = new Date("1.2.2023");
      const startDate = new Date("4.2.2023");
      const endDate = new Date(new Date().getFullYear(), 11, 31);
    console.log(
        isWithinInterval(dateInQuestion, {
          start: startDate,
          end: endDate,
        })
      );
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
