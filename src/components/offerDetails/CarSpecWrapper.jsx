// <CarSpecWrapper amount="preview" specs={carSpecData} mobile={true} />
import React from "react";
import CarSpec from "./CarSpec";
import { useCarSpecFilter } from "./hooks/useCarSpecFilter";

const CarSpecWrapper = ({ amount, specs }) => {
  const { filteredSpecs } = useCarSpecFilter({ specs, amount });

  return (
    <div className={`flex w-full justify-center flex-wrap gap-2`}>
      {Object.keys(filteredSpecs).map((spec, index) => (
        <CarSpec
          key={index}
          title={filteredSpecs[spec].title}
          value={filteredSpecs[spec].value}
          icon={filteredSpecs[spec].icon}
        />
      ))}
    </div>
  );
};

export default CarSpecWrapper;
