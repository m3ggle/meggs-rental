import React from "react";
import { useForm } from "react-hook-form";
import FilterCatalog from "../../../components/filter/FilterCatalog";

import { useWindowSize } from "../../../hooks/useWindowSize";
import SearchFilter from "./SearchFilter";

const LayoutCatalog = ({ children }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const size = useWindowSize();

  const filterRender = () => {
    if (size.width >= 1000) {
      return <FilterCatalog />;
    } else {
      return (
        <div className="w-[312px]">
          <SearchFilter />
          {/* <Controller
            name="search"
            control={control}
            render={({ field, fieldState }) => (
              <SearchFilter
                firstIcon="fa-solid fa-magnifying-glass"
                onChange={field.onChange}
                label="Search for a offer?"
                placeholder="Audi A8"
                value={field.value}
                onBlur={field.onBlur}
                error={fieldState.error}
              />
            )}
          /> */}
        </div>
      );
    }
  };

  return (
    <div className="flex w-full max-w-[1440px] flex-col gap-6 p-6 600:p-12 1000:flex-row 1000:p-14">
      <div className="relative w-full 1000:flex 1000:h-full 1000:w-[340px] 1000:min-w-[340px] 1000:justify-center">
        <div className="hideScrollbar flex w-full justify-center overflow-scroll 1000:fixed 1000:left-14 1000:top-14 1000:h-full 1000:w-[340px] 1000:max-w-[340px] 1000:pb-12">
          {filterRender()}
        </div>
      </div>
      <div className="flex h-fit w-full flex-wrap justify-center gap-2 600:gap-4">
        {children}
      </div>
    </div>
  );
};

export default LayoutCatalog;
