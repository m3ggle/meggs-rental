import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import TextInput from "../../../components/input/TextInput";
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
  const { control, handleSubmit, setValue } = useForm();

  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onSubmit = (data) => {
    console.log("submitting");
    handleUrlUpdate(data, "search");
  };
  const handleFilterCallback = (data) => {
    console.log("filter calling back");
    handleUrlUpdate(data, "filter");
  };

  const handleUrlUpdate = (data, type) => {
    if (type === "filter") {
      searchParams.get("search") && (data.search = searchParams.get("search"));
      const newParams = new URLSearchParams(data);
      setSearchParams(newParams);
    } else if (type === "search") {
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

  // when changing the search inside filterModal, the search outside filterModal has to be updated too
  const settingSearch = (value) => {
    setValue("search", value)
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
          <div className="flex w-full gap-x-2 items-end">
            <Controller
              name="search"
              control={control}
              defaultValue={
                searchParams.get("search")
                  ? searchParams.get("search")
                  : undefined
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
            <>
              <button
                type="button"
                onClick={openModal}
                className={`fa-solid fa-filter h-10 flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmGrey50 text-base text-lmGrey200 dark:bg-lmGrey800 dark:text-dmGrey300`}
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className={`fa-solid fa-chevron-right h-10 flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmPrimary text-base text-white dark:bg-dmPrimary dark:text-white`}
              />
            </>
          </div>
      </form>
      <FilterModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleFilterCallback={handleFilterCallback}
        setOutsideSearch={settingSearch}
        handleDeleteInput={handleDelete}
      />
    </div>
  );
};

export default SearchFilter;
