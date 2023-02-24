import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useVD1GetOptions } from "../../../api/supabase/useVD1GetOptions";
import BottomPart from "../../../components/authentication/BottomPart";
import Autocomplete from "../../../components/input/autocomplete/Autocomplete";
import Select from "../../../components/input/Select";
import TextInput from "../../../components/input/TextInput";

const UploadVehicleDetails1 = ({ handleCallback }) => {
  const { transmission, fuelType, vehicleName, brandName } =
    JSON.parse(localStorage.getItem("uploadData")) ?? false;

  const { fuelTypes, transmissions, brandNames } = useVD1GetOptions();

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const nextStep = true;
    handleCallback({ data, nextStep });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <span className="text-base font-semibold text-lmGrey600 dark:text-dmGrey100">
          Vehicle Details - 1
        </span>
        <Controller
          name="vehicleName"
          control={control}
          rules={{
            required: "Vehicle name is required",
          }}
          defaultValue={vehicleName ? vehicleName : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-car"
              onChange={field.onChange}
              label="What is the name of the offer/car?"
              placeholder="Volkswagen Fox"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />

        <Controller
          name="brandName"
          control={control}
          rules={{ required: "Select an option" }}
          defaultValue={brandName ?? undefined}
          render={({ field, fieldState }) => (
            <Autocomplete
              label="From which brand is the offer?"
              onSelect={(e) => field.onChange(e.name)}
              value={field.value}
              placeholder="Volkswagen "
              itemList={brandNames}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="transmission"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={transmission ? transmission : undefined}
              icon="fa-solid fa-gears"
              placeholder="Manual "
              itemList={transmissions}
              onChange={field.onChange}
              label="Select the Transmission"
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="fuelType"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={fuelType ? fuelType : undefined}
              icon="fa-solid fa-gas-pump"
              placeholder="Gas "
              itemList={fuelTypes}
              onChange={field.onChange}
              label="Select the Fuel Type"
              error={fieldState.error}
            />
          )}
        />
      </div>
      <BottomPart
        firstBtn="primary"
        firstBtnTitle="Continue"
        firstBtnType="submit"
        firstBtnOnClick={handleSubmit}
      />
    </form>
  );
};

export default UploadVehicleDetails1;

// <Controller
//   name="brandName"
//   control={control}
//   rules={{ required: "Select an option" }}
//   render={({ field, fieldState }) => (

// <Select
//   value={brandName ? brandName : undefined}
//   icon="fa-solid fa-tag"
//   placeholder="Volkswagen "
//   itemList={brandNames}
//   onChange={field.onChange}
//   label="Select a Brand"
//   error={fieldState.error}
// />
//               )}
// />
