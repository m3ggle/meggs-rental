import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import TextInput from "../../../../components/input/TextInput";
import { cleanUpFilterData } from "../../../catalog/helper/cleanUpFilterData";
import { useHandlingParams } from "../../../catalog/helper/useHandlingParams";

const ChatSidebarSearch = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { handleUrlUpdate } = useHandlingParams();
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    data.search !== "" && data.search !== undefined
      ? handleUrlUpdate(cleanUpFilterData(data), "search")
      : handleSearchDelete();
  };

  const handleSearchDelete = () => {
    searchParams.delete("search")
    setSearchParams(searchParams)
    setValue("search", "");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full items-end gap-x-2"
    >
      <Controller
        name="search"
        control={control}
        defaultValue={
          searchParams.get("search") ? searchParams.get("search") : undefined
        }
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-magnifying-glass"
            secondIcon="fa-solid fa-times"
            onChange={field.onChange}
            placeholder="Audi A8"
            value={field.value}
            onBlur={field.onBlur}
            onDelete={handleSearchDelete}
            error={fieldState.error}
          />
        )}
      />

      <button
        type="submit"
        onClick={handleSubmit}
        className={`fa-solid fa-chevron-right flex h-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmPrimary text-base text-white dark:bg-dmPrimary dark:text-white`}
      />
    </form>
  );
};

export default ChatSidebarSearch;
