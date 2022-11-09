// <CarSpecWrapper amount="preview" specs={carSpecData} mobile={true} /> 
import React, { useEffect, useState } from "react";
import CarSpec from "./CarSpec";

const conditionPreview = [
  "transmission",
  "fuelType",
  "color",
  "trunkVolume",
  "seats",
  "smoking",
];

const CarSpecWrapper = ({ amount, specs, mobile }) => {
  // Todo: React.Callback

  const [filteredSpecs, setFilteredSpecs] = useState([]);

  useEffect(() => {
    let filSpecs = [];
    if (amount === "all") {
      filSpecs = Object.keys(specs).map((itemKey) => {
        return specs[itemKey];
      });
      setFilteredSpecs(filSpecs);
    } else if (amount === "preview") {
      Object.keys(specs).map(
        (itemKey) =>
          conditionPreview.includes(itemKey) && filSpecs.push(specs[itemKey])
      );
      setFilteredSpecs(filSpecs);
    } else {
      setFilteredSpecs([]);
    }
  }, [amount, specs]);

  return (
    <div className={`flex ${mobile ? "w-[360px]" : "w-full justify-between"} flex-wrap`}>
      {filteredSpecs.map((spec, index) => (
        <CarSpec
          key={spec.title === "" ? index : spec.title}
          title={spec.title}
          value={spec.value}
          icon={spec.icon}
        />
      ))}
    </div>
  );
};

export default CarSpecWrapper;
