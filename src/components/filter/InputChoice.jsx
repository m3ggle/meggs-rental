import React from "react";
import MobileCatalogAutocomplete from "./MobileCatalogAutocomplete";
import { OfferNameAutocomplete } from "./OfferNameAutocomplete";

const InputChoice = ({ choice, control, handleDelete, definedActions }) => {
  if (choice === "autocomplete") {
    return (
      <MobileCatalogAutocomplete
        control={control}
        definedActions={definedActions}
      />
    );
  }

  if (choice === "search") {
    return (
      <OfferNameAutocomplete
        control={control}
        onDelete={() => handleDelete("offerName", "")}
      />
    );
  }

  return <></>;
};

export default InputChoice;
