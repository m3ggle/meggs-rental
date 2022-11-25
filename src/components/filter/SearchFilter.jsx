import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Controller } from "react-hook-form";
import ExampleData from "../../ExampleData";
import { useDebounce } from "../../hooks/useDebounce";
import Btn from "../common/Btn";
import Autocomplete from "../input/Autocomplete";
import FilterModal from "./FilterModal";
import { useSearchFilter } from "./hooks/useSearchFilter";
import axios from "axios"


const SearchFilter = ({ name, label }) => {
  const {
    isOpen,
    control,
    onSubmit,
    closeModal,
    openModal,
    handleSubmit,
    handleDelete,
  } = useSearchFilter();

  const {debounce} = useDebounce()

  // autocomplete
  const { citiesAutocomplete } = ExampleData();
  const { city } = JSON.parse(localStorage.getItem("signUpData")) ?? false;

  const [autoCompleteList, setAutoCompleteList] = useState([]);

  const handleChange = debounce(() => mockFetchData("event"), 800);

  const mockFetchData = () => {
    console.log("blab")
  }
  
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-[340px] flex-col gap-y-2"
      >
        <label
          htmlFor={name}
          className="text-sm text-lmGrey500 dark:text-dmGrey100"
        >
          {label}
        </label>
        {/* input and error*/}
        <div className="flex w-full items-end gap-x-2">
          {/* <Controller
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
          /> */}
          <Controller
            name="city"
            control={control}
            rules={{
              required: "City is required",
            }}
            render={({ field, fieldState }) => (
              <Autocomplete
                // placeholder={citiesAutocomplete.placeholder}
                value={city ? city : undefined}
                itemList={autoCompleteList}
                onChange={() => {
                  field.onChange();
                  handleChange();
                }}
                onInputChange={handleChange}
                label="What city you live in?"
                error={fieldState.error}
              />
            )}
          />
          <button
            type="button"
            onClick={openModal}
            className={`fa-solid fa-filter flex h-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmGrey50 text-base text-lmGrey200 dark:bg-lmGrey800 dark:text-dmGrey300`}
          />
          <Btn
            type="submit"
            uiType="primary"
            icon="fa-solid fa-chevron-right"
            onClick={handleSubmit}
          />
        </div>
      </form>
      <FilterModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default SearchFilter;
