import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { cleanUpFilterData } from "../../helper/filter/cleanUpFilterData";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import Btn from "../common/Btn";
import TextInput from "../input/TextInput";
import FilterModal from "./FilterModal";

const SearchFilter = ({ name, label }) => {
  const { control, handleSubmit, setValue } = useForm();
  let [searchParams] = useSearchParams();
  const { setSingleParam, deleteSingleParam, getSingleParam } =
    useUrlManipulation();

  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onSubmit = (data) => {
    const cleanedUpSearch = cleanUpFilterData(data).search;
    cleanedUpSearch && setSingleParam("search", cleanedUpSearch);
  };

  useEffect(() => {
    setValue("search", searchParams.get("search"));
  }, [setValue, searchParams]);

  const handleDelete = (inputName, inputValue) => {
    setValue(inputName, inputValue);
    deleteSingleParam(inputName);
  };

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
