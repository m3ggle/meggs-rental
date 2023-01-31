// <CarSpecWrapper amount="preview" specs={carSpecData} mobile={true} />
import React from "react";
import CarSpec from "./CarSpec";
import { useCarSpecFilter } from "./hooks/useCarSpecFilter";

const CarSpecWrapper = ({ amount, specs }) => {
  const { handleAmountPreview, handleAmountAll } = useCarSpecFilter();
  
  let carSpecs = {};
  if (amount === "preview") {
    carSpecs = handleAmountPreview(specs);
  } else {
    carSpecs = handleAmountAll(specs)
  }

  return (
    <div className={`flex w-full flex-wrap justify-center gap-2`}>
      {Object.keys(carSpecs).map((spec, index) => (
        <CarSpec
          key={index}
          title={carSpecs[spec].title}
          value={carSpecs[spec].value}
          icon={carSpecs[spec].icon}
        />
      ))}
    </div>
  );
};

export default CarSpecWrapper;
