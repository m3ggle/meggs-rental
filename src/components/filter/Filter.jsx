import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import ExampleData from "../../data/dataCollection";
import { cleanUpFilterData } from "../../helpers/filter/cleanUpFilterData";
import { regexPrice } from "../../helpers/regexCollection";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useDebounce } from "../../hooks/useDebounce";
import Btn from "../common/Btn";
import Select from "../input/Select";
import TextInput from "../input/TextInput";
import MobileCatalogAutocomplete from "./MobileCatalogAutocomplete";
import { OfferNameAutocomplete } from "./OfferNameAutocomplete";
const { filterSelects } = ExampleData();
const {
  transmissionSelect,
  fuelSelect,
  seatSelect,
  trunkSelect,
  colorSelect,
  smokingSelect,
} = filterSelects;

const Filter = ({ isOpen, closeModal, filterModal, definedActions }) => {
  let [searchParams] = useSearchParams();
  const { setArrayOfParams, deleteSingleParam, getSingleParam } =
    useUrlManipulation();
  const { control, handleSubmit, setValue, watch } = useForm();
  const [resetCount, setResetCount] = useState(0);

  const onSubmit = (data) => {
    setArrayOfParams(cleanUpFilterData(data));
    filterModal && closeModal();
  };

  // when params change, set search (to be up to date with the outside (when modal modus is active) search)
  useEffect(() => setValue("search", searchParams.get("search")), [setValue]);
  // when modal closes it is not unmounted, it is still mounted so the resetCount does not get reset, this will solve it
  useEffect(() => setResetCount(0), [isOpen]);

  const handleDelete = (inputName, inputValue) => {
    setValue(inputName, inputValue);
    deleteSingleParam(inputName);
  };

  const handleClearAll = () => {
    // delete textInputs
    Object.keys(watch()).forEach((item) => {
      handleDelete(item, "");
    });

    // delete selects
    setResetCount((prevState) => prevState + 1);
  };

  // debounce submit
  const { debounce } = useDebounce();
  const handleDebounceSubmit = debounce(() => handleSubmit(onSubmit)(), 1600);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      // w-80
      className={`${
        !filterModal && "pb-[90px]"
      } relative flex h-fit w-[340px] max-w-[340px] flex-col gap-y-3 rounded-lg`}
    >
      <div className="flex flex-col gap-y-3">
        <span className="text-2xl text-lmGrey700 dark:text-dmGrey25">
          Filter
        </span>
        <OfferNameAutocomplete
          control={control}
          onDelete={() => handleDelete("offerName", "")}
          value={getSingleParam("offerName") ?? undefined}
          placeholder="VW Fox..."
          onCallback={() => handleSubmit(onSubmit)()}
        />

        <MobileCatalogAutocomplete
          definedActions={definedActions}
          control={control}
          callbackFunction={() => handleSubmit(onSubmit)()}
        />

        {/* <div className="gap-y-1"> */}
        {/* <div className="flex gap-x-2"> */}
        <Controller
          name="startDate"
          control={control}
          defaultValue={getSingleParam("startDate") ?? undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-calendar-days"
              secondIcon="fa-solid fa-times"
              onChange={(change) => {
                field.onChange(change);
                handleDebounceSubmit();
              }}
              onDelete={() => handleDelete("startDate", "")}
              label="Start date"
              placeholder="02.06.2023"
              type="date"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="endDate"
          control={control}
          defaultValue={getSingleParam("endDate") ?? undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-calendar-days"
              secondIcon="fa-solid fa-times"
              onChange={(change) => {
                field.onChange(change);
                handleDebounceSubmit();
              }}
              onDelete={() => handleDelete("endDate", "")}
              label="End date"
              placeholder="21.06.2023"
              type="date"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        {/* </div> */}
        {/* </div> */}
        <div className="gap-y-1">
          <div className="flex gap-x-2">
            <Controller
              name="dayStartPrice"
              control={control}
              defaultValue={getSingleParam("dayStartPrice") ?? undefined}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onChange={(change) => {
                    field.onChange(change);
                    handleDebounceSubmit();
                  }}
                  onDelete={() => handleDelete("dayStartPrice", "")}
                  label="Daily start price"
                  placeholder="30..."
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
              rules={{
                pattern: {
                  value: regexPrice,
                  message: "Only numbers are allowed",
                },
              }}
            />
            <Controller
              name="dayEndPrice"
              control={control}
              defaultValue={getSingleParam("dayEndPrice") ?? undefined}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onDelete={() => handleDelete("dayEndPrice", "")}
                  onChange={(change) => {
                    field.onChange(change);
                    handleDebounceSubmit();
                  }}
                  label="Daily end price"
                  placeholder="300..."
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
              rules={{
                pattern: {
                  value: regexPrice,
                  message: "Only numbers are allowed",
                },
              }}
            />
          </div>
        </div>
        <div className="gap-y-1">
          <div className="flex gap-x-2">
            <Controller
              name="weekStartPrice"
              control={control}
              defaultValue={getSingleParam("weekStartPrice") ?? undefined}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onChange={(change) => {
                    field.onChange(change);
                    handleDebounceSubmit();
                  }}
                  onDelete={() => handleDelete("weekStartPrice", "")}
                  label="Weekly start price"
                  placeholder="30..."
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
              rules={{
                pattern: {
                  value: regexPrice,
                  message: "Only numbers are allowed",
                },
              }}
            />
            <Controller
              name="weekEndPrice"
              control={control}
              defaultValue={getSingleParam("weekEndPrice") ?? undefined}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onDelete={() => handleDelete("weekEndPrice", "")}
                  onChange={(change) => {
                    field.onChange(change);
                    handleDebounceSubmit();
                  }}
                  label="Weekly end price"
                  placeholder="300..."
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
              rules={{
                pattern: {
                  value: regexPrice,
                  message: "Only numbers are allowed",
                },
              }}
            />
          </div>
        </div>
        <div className="gap-y-1">
          <div className="flex gap-x-2">
            <Controller
              name="monthStartPrice"
              control={control}
              defaultValue={getSingleParam("monthStartPrice") ?? undefined}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onChange={(change) => {
                    field.onChange(change);
                    handleDebounceSubmit();
                  }}
                  onDelete={() => handleDelete("monthStartPrice", "")}
                  label="Monthly start price"
                  placeholder="30..."
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
              rules={{
                pattern: {
                  value: regexPrice,
                  message: "Only numbers are allowed",
                },
              }}
            />
            <Controller
              name="monthEndPrice"
              control={control}
              defaultValue={getSingleParam("monthEndPrice") ?? undefined}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onDelete={() => handleDelete("monthEndPrice", "")}
                  onChange={(change) => {
                    field.onChange(change);
                    handleDebounceSubmit();
                  }}
                  label="Monthly end price"
                  placeholder="300..."
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
              rules={{
                pattern: {
                  value: regexPrice,
                  message: "Only numbers are allowed",
                },
              }}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-y-1">
          <span className="text-sm text-lmGrey500 dark:text-dmGrey100">
            Car Specifics
          </span>
          <div className="flex flex-col gap-y-2">
            <Controller
              name="transmission"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  value={getSingleParam("transmission") ?? undefined}
                  icon={transmissionSelect.icon}
                  placeholder={transmissionSelect.placeholder}
                  itemList={transmissionSelect.list}
                  onChange={(change) => {
                   field.onChange(change);
                   handleSubmit(onSubmit)();
                  }}
                  label={transmissionSelect.label}
                  error={fieldState.error}
                  reset={resetCount}
                />
              )}
            />
            <Controller
              name="fuelType"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  value={getSingleParam("fuelType") ?? undefined}
                  icon={fuelSelect.icon}
                  placeholder={fuelSelect.placeholder}
                  itemList={fuelSelect.list}
                  onChange={(change) => {
                    field.onChange(change);
                    handleSubmit(onSubmit)();
                  }}
                  label={fuelSelect.label}
                  error={fieldState.error}
                  reset={resetCount}
                />
              )}
            />
            <Controller
              name="amountSeats"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  value={getSingleParam("amountSeats") ?? undefined}
                  icon={seatSelect.icon}
                  placeholder={seatSelect.placeholder}
                  itemList={seatSelect.list}
                  onChange={(change) => {
                    field.onChange(change);
                    handleSubmit(onSubmit)();
                  }}
                  label={seatSelect.label}
                  error={fieldState.error}
                  reset={resetCount}
                />
              )}
            />
            <Controller
              name="trunkVolume"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  value={getSingleParam("trunkVolume") ?? undefined}
                  icon={trunkSelect.icon}
                  placeholder={trunkSelect.placeholder}
                  itemList={trunkSelect.list}
                  onChange={(change) => {
                    field.onChange(change);
                    // handleSubmit(onSubmit)();
                  }}
                  label={trunkSelect.label}
                  error={fieldState.error}
                  reset={resetCount}
                />
              )}
            />
            <Controller
              name="color"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  value={getSingleParam("color") ?? undefined}
                  icon={colorSelect.icon}
                  placeholder={colorSelect.placeholder}
                  itemList={colorSelect.list}
                  onChange={(change) => {
                    field.onChange(change);
                    handleSubmit(onSubmit)();
                  }}
                  label={colorSelect.label}
                  error={fieldState.error}
                  reset={resetCount}
                />
              )}
            />
            <Controller
              name="smokingAllowed"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  value={getSingleParam("smokingAllowed") ?? undefined}
                  icon={smokingSelect.icon}
                  placeholder={smokingSelect.placeholder}
                  itemList={smokingSelect.list}
                  onChange={(change) => {
                    field.onChange(change);
                    handleSubmit(onSubmit)();
                  }}
                  label={smokingSelect.label}
                  error={fieldState.error}
                  reset={resetCount}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full gap-x-2">
        <Btn
          type="button"
          uiType="secondary"
          onClick={handleClearAll}
          title="Clear Filter"
        />
        {/* <Btn
          type="submit"
          icon="fa solid fa-chevron-right"
          uiType="primary"
          onClick={handleSubmit}
          title="Update Filter"
        /> */}
      </div>
    </form>
  );
};

export default Filter;
