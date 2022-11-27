import Btn from "../common/Btn";
import FilterModal from "./FilterModal";
import { useSearchFilter } from "./hooks/useSearchFilter";
import InputChoice from "./InputChoice";

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
          <InputChoice
            choice="autocomplete"
            control={control}
            handleDelete={handleDelete}
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
