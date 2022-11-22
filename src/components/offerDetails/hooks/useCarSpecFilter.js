import { useCallback, useEffect, useState } from "react";
import ExampleData from "../../../ExampleData";

const { carSpecData, previewSpecs } = ExampleData();

export const useCarSpecFilter = ({ specs, amount }) => {
  const [filteredSpecs, setFilteredSpecs] = useState([]);

  const handleAmountAll = useCallback(() => {
    Object.keys(carSpecData).map((itemKey) => {
      carSpecData[itemKey].value = specs[itemKey];
    });
    setFilteredSpecs(carSpecData);
  }, [specs]);

  const handleAmountPreview = useCallback(() => {
    let filSpecs = {};
    Object.keys(carSpecData).map((itemKey) => {
      if (previewSpecs.includes(itemKey)) {
        filSpecs[itemKey] = carSpecData[itemKey];
        filSpecs[itemKey].value = specs[itemKey];
      }
    });
    setFilteredSpecs(filSpecs);
  }, [specs]);

  useEffect(() => {
    amount === "preview" ? handleAmountPreview() : handleAmountAll();
  }, [amount, handleAmountAll, handleAmountPreview]);

  return { filteredSpecs };
};
