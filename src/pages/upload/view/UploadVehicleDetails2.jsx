import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import Select from "../../../components/input/Select";
import {
  categorySelect,
  conditionSelect,
  seatSelect,
  trunkVolumeSelect,
} from "../data/uploadVehicleDetailsData";
import { useVD2GetOptions } from "../hooks/useVD2GetOptions";

const UploadVehicleDetails2 = ({ handleCallback }) => {
  const { category, vehicleCondition, trunkVolume, amountSeats } =
    JSON.parse(localStorage.getItem("uploadData")) ?? false;

  const { categories, conditions } = useVD2GetOptions();

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
          Vehicle Details - 2
        </span>
        <Controller
          name="category"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={category ? category : undefined}
              icon={categorySelect.icon}
              placeholder="Sedan "
              itemList={categories}
              onChange={field.onChange}
              label="In which category fits the offer in?"
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="vehicleCondition"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={vehicleCondition ? vehicleCondition : undefined}
              icon={conditionSelect.icon}
              placeholder={conditionSelect.placeholder}
              itemList={conditions}
              onChange={field.onChange}
              label="In what condition is the offer?"
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

export default UploadVehicleDetails2;
