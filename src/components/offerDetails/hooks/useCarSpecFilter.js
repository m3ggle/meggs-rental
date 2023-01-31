import { useCallback } from "react";
import { carSpecData } from "../data/carSpecData";
import { previewSpecs } from "../data/previewSpecs";

export const useCarSpecFilter = () => {
  const handleAmountAll = useCallback((specs) => {
    Object.keys(carSpecData).map((itemKey) => {
      carSpecData[itemKey].value = specs[itemKey];
    });
  }, []);

  const handleAmountPreview = useCallback((specs) => {
    let filSpecs = {};
    Object.keys(carSpecData).map((itemKey) => {
      if (previewSpecs.includes(itemKey)) {
        filSpecs[itemKey] = carSpecData[itemKey];
        filSpecs[itemKey].value = specs[itemKey];
      }
    });
    return filSpecs;
  }, []);

  return { handleAmountPreview, handleAmountAll };
};
