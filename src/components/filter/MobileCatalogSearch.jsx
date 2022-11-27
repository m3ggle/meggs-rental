import React from "react";
import { Controller } from "react-hook-form";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import TextInput from "../input/TextInput";

const MobileCatalogSearch = ({ control, handleDelete }) => {
  const { getSingleParam } = useUrlManipulation();
  
  return (
    <Controller
      name="search"
      control={control}
      defaultValue={
        getSingleParam("search") ? getSingleParam("search") : undefined
      }
      render={({ field, fieldState }) => (
        <TextInput
          firstIcon="fa-solid fa-magnifying-glass"
          secondIcon="fa-solid fa-times"
          onChange={field.onChange}
          placeholder="Audi A8"
          value={field.value}
          onBlur={field.onBlur}
          onDelete={() => handleDelete("search", "")}
          error={fieldState.error}
        />
      )}
    />
  );
};

export default MobileCatalogSearch;
