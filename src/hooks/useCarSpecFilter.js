import { useCallback } from "react";
import { carSpecData } from "../components/offerDetails/data/carSpecData";
import { previewSpecs } from "../components/offerDetails/data/previewSpecs";

export const useCarSpecFilter = () => {
  const handleAmountAll = useCallback((specs) => {
    let filSpecs = {};
    Object.keys(carSpecData).map((itemKey) => {
      filSpecs[itemKey] = carSpecData[itemKey];
      filSpecs[itemKey].value = specs[itemKey];
    });
    return filSpecs;
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
