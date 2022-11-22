import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Btn from "../../../../components/common/Btn";
import TextInput from "../../../../components/input/TextInput";
import { cleanUpFilterData } from "../../../../helper/filter/cleanUpFilterData";
import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

const ChatSidebarSearch = () => {
  let [searchParams] = useSearchParams();
  const { setSingleParam, deleteSingleParam } = useUrlManipulation();
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    const cleanedUpSearch = cleanUpFilterData(data).search;
    cleanedUpSearch && setSingleParam("search", cleanedUpSearch);
  };

  const handleSearchDelete = () => {
    deleteSingleParam("search");
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

      <Btn
        type="submit"
        uiType="primary"
        icon="fa-solid fa-chevron-right"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default ChatSidebarSearch;
