import React from "react";
import MobileCatalogAutocomplete from "./MobileCatalogAutocomplete";
import MobileCatalogSearch from "./MobileCatalogSearch";

const InputChoice = ({ choice, control, handleDelete }) => {
  if (choice === "autocomplete") {
    return <MobileCatalogAutocomplete control={control} />;
  }

  if (choice === "search") {
    return (
      <MobileCatalogSearch control={control} handleDelete={handleDelete} />
    );
  }

  return <></>;
};

export default InputChoice;
