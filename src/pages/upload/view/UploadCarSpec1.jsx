import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "../../../components/input/Select";
import ExampleData from "../../../ExampleData";
import BottomPart from "../../signUp/view/BottomPart";

const { transmissionSelect, fuelSelect, trunkSelect, seatSelect } =
  ExampleData();

const UploadCarSpec1 = ({ handleCallback }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("basic info");
    const nextStep = true;
    handleCallback({ data, nextStep });
  };

    console.log(transmissionSelect, fuelSelect, trunkSelect, seatSelect);
    
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <span className="text-base font-semibold text-lmGrey600 dark:text-dmGrey100">
          Car Specification - 1
        </span>
        <Controller
          name="transmission"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              icon={transmissionSelect.icon}
              placeholder={transmissionSelect.placeholder}
              itemList={transmissionSelect.list}
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
              icon={fuelSelect.icon}
              placeholder={fuelSelect.placeholder}
              itemList={fuelSelect.list}
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
              icon={trunkSelect.icon}
              placeholder={trunkSelect.placeholder}
              itemList={trunkSelect.list}
              onChange={field.onChange}
              label="Select the Trunk Volume"
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="seats"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
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

export default UploadCarSpec1;
