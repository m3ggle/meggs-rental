import { Popover } from "@headlessui/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import ExampleData from "../../ExampleData";
import Select from "../input/Select";
import TextInput from "../input/TextInput";

const Filter = ({ onClose }) => {
  // Todo: React Form Hook
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (onClose) {
      onClose();
    }
  };

  const { filterSelects } = ExampleData();
  const {
    transmissionSelect,
    fuelSelect,
    seatSelect,
    trunkSelect,
    colorSelect,
    smokingSelect,
  } = filterSelects;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      // w-80
      className="relative flex h-[640px] flex-col gap-y-3 overflow-y-scroll rounded-lg "
    >
      {/* header */}
      <div className="flex items-center justify-between text-2xl text-lmGrey700 dark:text-dmGrey25">
        <span className="">Filter</span>
        {onClose && (
          <Popover.Button>
            <i className="fa-solid fa-times cursor-pointer"></i>
          </Popover.Button>
        )}
      </div>

      {/* main */}
      <div className="flex flex-col gap-y-3">
        <div className="gap-y-1">
          <span className="text-base text-lmGrey600 dark:text-dmGrey100">
            Date Specifics
          </span>
          <Controller
            name="dateRange"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                firstIcon="fa-solid fa-calendar-days"
                secondIcon="fa-solid fa-chevron-down"
                onChange={field.onChange}
                label="Select a Date Range"
                placeholder="13.10.2022 - 25.10.2022"
                value={field.value}
                onBlur={field.onBlur}
                error={fieldState.error}
              />
            )}
          />
        </div>

        <div className="gap-y-1">
          <span className="text-base text-lmGrey600 dark:text-dmGrey100">
            Offer Specifics
          </span>
          <div className="flex gap-x-2">
            <Controller
              name="priceStart"
              control={control}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-euro"
                  type="number"
                  onChange={field.onChange}
                  label="Start"
                  placeholder="30..."
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
              rules={{
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
              }}
            />
            <Controller
              name="priceEnd"
              control={control}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-coins"
                  secondIcon="fa-solid fa-euro"
                  type="number"
                  onChange={field.onChange}
                  label="End"
                  placeholder="300..."
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
              rules={{
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
              }}
            />
          </div>
        </div>

        <div className=" flex flex-col gap-y-1">
          <span className="text-base text-lmGrey600 dark:text-dmGrey100">
            Car Specifics
          </span>
          <div className="flex flex-col gap-y-2">
            <Controller
              name="transmission"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  icon={transmissionSelect.icon}
                  placeholder={transmissionSelect.placeholder}
                  itemList={transmissionSelect.list}
                  onChange={field.onChange}
                  label={transmissionSelect.label}
                  error={fieldState.error}
                />
              )}
            />
            <Controller
              name="fuelType"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  icon={fuelSelect.icon}
                  placeholder={fuelSelect.placeholder}
                  itemList={fuelSelect.list}
                  onChange={field.onChange}
                  label={fuelSelect.label}
                  error={fieldState.error}
                />
              )}
            />
            <Controller
              name="seats"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  icon={seatSelect.icon}
                  placeholder={seatSelect.placeholder}
                  itemList={seatSelect.list}
                  onChange={field.onChange}
                  label={seatSelect.label}
                  error={fieldState.error}
                />
              )}
            />
            <Controller
              name="trunkVolume"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  icon={trunkSelect.icon}
                  placeholder={trunkSelect.placeholder}
                  itemList={trunkSelect.list}
                  onChange={field.onChange}
                  label={trunkSelect.label}
                  error={fieldState.error}
                />
              )}
            />
            <Controller
              name="color"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  icon={colorSelect.icon}
                  placeholder={colorSelect.placeholder}
                  itemList={colorSelect.list}
                  onChange={field.onChange}
                  label={colorSelect.label}
                  error={fieldState.error}
                />
              )}
            />
            <Controller
              name="smoking"
              control={control}
              render={({ field, fieldState }) => (
                <Select
                  icon={smokingSelect.icon}
                  placeholder={smokingSelect.placeholder}
                  itemList={smokingSelect.list}
                  onChange={field.onChange}
                  label={smokingSelect.label}
                  error={fieldState.error}
                />
              )}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="max-w-[340px] rounded-lg bg-lmPrimary px-3 py-[10px] text-sm font-semibold text-lmGrey25 shadow-md shadow-dmPrimary/40 dark:bg-dmPrimary"
      >
        Click to Submit
      </button>
    </form>
  );
};

export default Filter;
