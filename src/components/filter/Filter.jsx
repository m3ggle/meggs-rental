import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import ExampleData from "../../data/dataCollection";
import { cleanUpFilterData } from "../../helpers/filter/cleanUpFilterData";
import { regexPrice } from "../../helpers/regexCollection";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
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
  const { setArrayOfParams, deleteSingleParam } = useUrlManipulation();
  const { control, handleSubmit, setValue, watch } = useForm();
  const [resetCount, setResetCount] = useState(0);

  const onSubmit = (data) => {
    console.log(data)
    setArrayOfParams(cleanUpFilterData(data));
    filterModal && closeModal();
  };

  // when params change, set search (to be up to date with the outside (when modal modus is active) search)
  useEffect(
    () => setValue("search", searchParams.get("search")),
    [setValue, searchParams]
  );
  // when modal closes it is not unmounted, it is still mounted so the resetCount does not get reset, this will solve it
  useEffect(() => setResetCount(0), [isOpen]);

  const handleDelete = (inputName, inputValue) => {
    setValue(inputName, inputValue);
    deleteSingleParam(inputName);
  };

  const handleClearAll = () => {
    // delete textInputs
    Object.keys(watch()).map((item) => {
      handleDelete(item, "");
    });

    // delete selects
    setResetCount((prevState) => prevState + 1);
  };

  // todo: set default values depending on url
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
        {/* <Controller
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
              onDelete={() => handleDelete("search", "")}
              error={fieldState.error}
            />
          )}
        /> */}
        <OfferNameAutocomplete
          control={control}
          onDelete={() => handleDelete("offerName", "")}
        />

        <MobileCatalogAutocomplete
          definedActions={definedActions}
          control={control}
        />

        <div className="gap-y-1">
          <div className="flex gap-x-2">
            <Controller
              name="startDate"
              control={control}
              defaultValue={
                searchParams.get("startDate")
                  ? searchParams.get("startDate")
                  : undefined
              }
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-calendar-days"
                  secondIcon="fa-solid fa-times"
                  onChange={field.onChange}
                  onDelete={() => handleDelete("startDate", "")}
                  label="Start date"
                  placeholder="02.06.2023"
                  type="text"
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
            />
            <Controller
              name="endDate"
              control={control}
              defaultValue={
                searchParams.get("endDate")
                  ? searchParams.get("endDate")
                  : undefined
              }
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-calendar-days"
                  secondIcon="fa-solid fa-times"
                  onChange={field.onChange}
                  onDelete={() => handleDelete("endDate", "")}
                  label="End date"
                  placeholder="21.06.2023"
                  type="text"
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
            />
          </div>
        </div>
        <div className="gap-y-1">
          <div className="flex gap-x-2">
            <Controller
              name="startPriceDay"
              control={control}
              defaultValue={
                searchParams.get("startPriceDay")
                  ? searchParams.get("startPriceDay")
                  : undefined
              }
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onChange={field.onChange}
                  onDelete={() => handleDelete("startPriceDay", "")}
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
              name="endPriceDay"
              control={control}
              defaultValue={
                searchParams.get("endPriceDay")
                  ? searchParams.get("endPriceDay")
                  : undefined
              }
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onDelete={() => handleDelete("endPriceDay", "")}
                  onChange={field.onChange}
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
              name="startPriceWeek"
              control={control}
              defaultValue={
                searchParams.get("startPriceWeek")
                  ? searchParams.get("startPriceWeek")
                  : undefined
              }
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onChange={field.onChange}
                  onDelete={() => handleDelete("startPriceWeek", "")}
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
              name="endPriceWeek"
              control={control}
              defaultValue={
                searchParams.get("endPriceWeek")
                  ? searchParams.get("endPriceWeek")
                  : undefined
              }
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onDelete={() => handleDelete("endPriceWeek", "")}
                  onChange={field.onChange}
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
              name="startPriceMonth"
              control={control}
              defaultValue={
                searchParams.get("startPriceMonth")
                  ? searchParams.get("startPriceMonth")
                  : undefined
              }
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onChange={field.onChange}
                  onDelete={() => handleDelete("startPriceMonth", "")}
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
              name="endPriceMonth"
              control={control}
              defaultValue={
                searchParams.get("endPriceMonth")
                  ? searchParams.get("endPriceMonth")
                  : undefined
              }
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-times"
                  onDelete={() => handleDelete("endPriceMonth", "")}
                  onChange={field.onChange}
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
                  value={
                    searchParams.get("transmission")
                      ? searchParams.get("transmission")
                      : undefined
                  }
                  icon={transmissionSelect.icon}
                  placeholder={transmissionSelect.placeholder}
                  itemList={transmissionSelect.list}
                  onChange={field.onChange}
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
                  value={
                    searchParams.get("fuelType")
                      ? searchParams.get("fuelType")
                      : undefined
                  }
                  icon={fuelSelect.icon}
                  placeholder={fuelSelect.placeholder}
                  itemList={fuelSelect.list}
                  onChange={field.onChange}
                  label={fuelSelect.label}
                  error={fieldState.error}
                  reset={resetCount}
                />
              )}
            />
            <Controller
              name="seats"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  value={
                    searchParams.get("seats")
                      ? searchParams.get("seats")
                      : undefined
                  }
                  icon={seatSelect.icon}
                  placeholder={seatSelect.placeholder}
                  itemList={seatSelect.list}
                  onChange={field.onChange}
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
                  value={
                    searchParams.get("trunkVolume")
                      ? searchParams.get("trunkVolume")
                      : undefined
                  }
                  icon={trunkSelect.icon}
                  placeholder={trunkSelect.placeholder}
                  itemList={trunkSelect.list}
                  onChange={field.onChange}
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
                  value={
                    searchParams.get("color")
                      ? searchParams.get("color")
                      : undefined
                  }
                  icon={colorSelect.icon}
                  placeholder={colorSelect.placeholder}
                  itemList={colorSelect.list}
                  onChange={field.onChange}
                  label={colorSelect.label}
                  error={fieldState.error}
                  reset={resetCount}
                />
              )}
            />
            <Controller
              name="smoking"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  value={
                    searchParams.get("smoking")
                      ? searchParams.get("smoking")
                      : undefined
                  }
                  icon={smokingSelect.icon}
                  placeholder={smokingSelect.placeholder}
                  itemList={smokingSelect.list}
                  onChange={field.onChange}
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
        <Btn
          type="submit"
          icon="fa solid fa-chevron-right"
          uiType="primary"
          onClick={handleSubmit}
          title="Update Filter"
        />
      </div>
    </form>
  );
};

export default Filter;
