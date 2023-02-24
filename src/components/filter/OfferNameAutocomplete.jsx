import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useGetOfferNameAutocomplete } from "../../api/supabase/useGetOfferNameAutocomeplete";
import { useDebounce } from "../../hooks/useDebounce";
import Autocomplete from "../input/autocomplete/Autocomplete";
import { handleFormatting } from "./helpers/handleFormatting";

export const OfferNameAutocomplete = ({
  control,
  onCallback = () => {},
  onDelete = () => {},
  label = undefined,
  defaultValue = undefined,
  value = undefined,
  placeholder = "VW Fox ",
}) => {
  //any states
  const [offerNameInput, setOfferNameInput] = useState("");
  const [itemList, setItemList] = useState([]);

  // supabase/database
  const { offers, isLoading } = useGetOfferNameAutocomplete(offerNameInput);

  // setting offerNameInput when debounce and min length
  const { debounce } = useDebounce();
  const setOfferNameInputDebounce = debounce(
    (input) => setOfferNameInput(input),
    800
  );
  const handleInputChange = (input = "") => {
    if (input.length > 2) setOfferNameInputDebounce(input);
  };

  // when a item actually get selected
  const handleSelect = (item = {}) => {
    setOfferNameInput(item.name);
    onCallback(item);
  };

  // observe request result
  useEffect(() => {
    if (offers.length > 0) {
      setItemList(handleFormatting(offers));
    }
  }, [offers]);

  // handling delete
  const handleDelete = () => {
    setOfferNameInput("");
    setItemList([]);
    onDelete();
  };

  return (
    <>
      <Controller
        name="offerName"
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            label={label}
            defaultValue={defaultValue}
            placeholder={placeholder}
            value={value}
            itemList={itemList}
            onSelect={(callbackObject) => {
              field.onChange(callbackObject.name);
              handleSelect(callbackObject);
            }}
            isLoading={isLoading}
            onBlur={field.onBlur}
            onDelete={handleDelete}
            onInputChange={handleInputChange}
            error={fieldState.error}
          />
        )}
      />
    </>
  );
};
