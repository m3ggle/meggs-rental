import { useLocation } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import Btn from "../common/Btn";
import FilterModal from "./FilterModal";
import { useSearchFilter } from "./hooks/useSearchFilter";
import InputChoice from "./InputChoice";

const SearchFilter = ({
  name,
  label,
  showSubmitButton,
  choice,
  definedActions,
}) => {
  const { isOpen, control, closeModal, openModal, handleSubmit, handleDelete } =
    useSearchFilter();

  const location = useLocation();
  const windowSize = useWindowSize();
  const inputColorCondition =
    location.pathname === "/explore/map" && windowSize.width < 1100;

  return (
    <div>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-[340px] flex-col gap-y-2"
      >
        {/* <label
          htmlFor={name}
          className="text-sm text-lmGrey500 dark:text-dmGrey100"
        >
          {label}
        </label> */}
        {/* input and error*/}
        <div className="flex w-full items-end gap-x-2 ">
          <InputChoice
            definedActions={definedActions}
            choice={choice}
            control={control}
            handleDelete={handleDelete}
          />
          {location.pathname !== "/explore/map" && (
            <button
              type="button"
              onClick={openModal}
              className={`fa-solid fa-filter flex h-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-lg ${
                inputColorCondition
                  ? "bg-white dark:bg-dmGrey900"
                  : "bg-lmGrey50 dark:bg-dmGrey800"
              } text-base text-lmGrey200  dark:text-dmGrey300`}
            />
          )
          }
          {(showSubmitButton === undefined || showSubmitButton === true) && (
            <Btn
              type="button"
              uiType="primary"
              icon="fa-solid fa-chevron-right"
              onClick={handleSubmit}
            />
          )}
        </div>
      </form>
      <FilterModal
        isOpen={isOpen}
        closeModal={closeModal}
        definedActions={definedActions}
      />
    </div>
  );
};

export default SearchFilter;
