import React from "react";
import { useForm } from "react-hook-form";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Filter from "./Filter";
import SearchFilter from "./SearchFilter";

const LayoutCatalog = ({ children }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const windowSize = useWindowSize();

  const filterRender = () => {
    if (windowSize.width >= 1000) {
      // return <FilterCatalog />;
      return <Filter isOpen={true} filterModal={false} />;
    } else {
      return (
        <div className="w-[312px]">
          <SearchFilter />
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
