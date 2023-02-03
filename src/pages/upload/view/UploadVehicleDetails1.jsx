import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import Select from "../../../components/input/Select";
import { seatSelect, trunkSelect, trunkVolumeSelect } from "../data/uploadVehicleDetailsData";
import { useVD1GetOptions } from "../hooks/useVD1GetOptions";

const UploadVehicleDetails1 = ({ handleCallback }) => {
  const { transmission, fuelType, trunkVolume, amountSeats } =
    JSON.parse(localStorage.getItem("uploadData")) ?? false;

  const { fuelTypes, transmissions } = useVD1GetOptions();

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
        <Controller
          name="trunkVolume"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={trunkVolume ? trunkVolume : undefined}
              icon={trunkVolumeSelect.icon}
              placeholder={trunkVolumeSelect.placeholder}
              itemList={trunkVolumeSelect.list}
              onChange={field.onChange}
              label="Select the Trunk Volume"
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="amountSeats"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={amountSeats ? amountSeats : undefined}
              icon={seatSelect.icon}
              placeholder={seatSelect.placeholder}
              itemList={seatSelect.list}
              onChange={field.onChange}
              label="Select the amounts of Seats"
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
