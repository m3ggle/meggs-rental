import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import FilterModal from "./FilterModal";
import Search from "./Search";

const SearchFilter = ({
  firstIcon,
  secondIcon,
  onChange,
  onBlur,
  name,
  placeholder,
  value,
  label,
  error,
  type,
}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { control, handleSubmit: handleSearchSubmit, setValue } = useForm();

  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onSubmitSearch = (data) => {
    console.log("submitting");
    data.search && handleUrlUpdate(data, "search");
  };
  const handleFilterCallback = (data) => {
    console.log("filter calling back");
    handleUrlUpdate(data, "filter");
  };

  const handleUrlUpdate = (data, type) => {
    if (type === "filter") {
      console.log(data);
      searchParams.get("search") && (data.search = searchParams.get("search"));
      const newParams = new URLSearchParams(data);
      setSearchParams(newParams);
    } else if (type === "search") {
      console.log("hallo");
      console.log(type);
      searchParams.set("search", data.search);
      setSearchParams(searchParams);
    }

    // let currentParams = {}
    // Object.entries(searchParams).map(item => {
    //   currentParams[item[0]] = item[1]
    // })

    // let seaParam = {}
    // seaParam.search = searchParams.get("search");

    // searchParams.forEach((val, key) => console.log(key, val))

    // console.log(searchParams.toString());

    // searchParams.set("search", "meggle")
    // searchParams.set("transmission", "manual")

    // setSearchParams(searchParams)
  };

  const handleDelete = (inputName, inputValue) => {
    setValue(inputName, inputValue);
    searchParams.delete(inputName);
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSearchSubmit(onSubmitSearch)}>
      <div
        className="flex w-full max-w-[340px] flex-col gap-y-2"
        aria-invalid={error ? "true" : "false"}
      >
        <label
          htmlFor={name}
          className="text-sm text-lmGrey500 dark:text-dmGrey100"
        >
          {label}
        </label>
        {/* input and error*/}
        <div className="flex w-full flex-col gap-y-1">
          <div className="flex w-full gap-x-2">
            <Controller
              name="search"
              control={control}
              defaultValue={
                searchParams.get("search")
                  ? searchParams.get("search")
                  : undefined
              }
              render={({ field, fieldState }) => (
                <Search
                  firstIcon="fa-solid fa-magnifying-glass"
                  secondIcon="fa-solid fa-times"
                  onChange={field.onChange}
                  label="Search for a offer?"
                  placeholder="Audi A8"
                  value={field.value}
                  onBlur={field.onBlur}
                  onDelete={() => handleDelete("search", "")}
                  error={fieldState.error}
                />
              )}
            />
            <>
              <button
                type="button"
                onClick={openModal}
                className={`fa-solid fa-filter flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmGrey50 text-base text-lmGrey200 dark:bg-lmGrey800 dark:text-dmGrey300`}
              />
              <button
                type="submit"
                onClick={handleSearchSubmit}
                className={`fa-solid fa-chevron-right flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmPrimary text-base text-white dark:bg-dmPrimary dark:text-white`}
              />
            </>
          </div>
        </div>
      </div>
      <FilterModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleFilterCallback={handleFilterCallback}
      />
    </form>
  );
};

export default SearchFilter;
