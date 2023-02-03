import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import Select from "../../../components/input/Select";
import TextInput from "../../../components/input/TextInput";
import { regexNumbersOnly } from "../../../helpers/regexCollection";
import { carTypeSelect, colorSelect } from "../data/uploadVehicleDetailsData";

const UploadVehicleDetails2 = ({ handleCallback }) => {
  const { carType, milage, color } =
    JSON.parse(localStorage.getItem("uploadData")) ?? false;

  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("basic info");
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
          name="carType"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={carType ? carType : undefined}
              icon={carTypeSelect.icon}
              placeholder={carTypeSelect.placeholder}
              itemList={[]}
              onChange={field.onChange}
              label="Select the Car Type"
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="milage"
          control={control}
          rules={{
            required: "Milage is required",
            pattern: {
              value: regexNumbersOnly,
              message: "Invalid code",
            },
          }}
          defaultValue={milage ? milage : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-gauge"
              type="number"
              onChange={field.onChange}
              label="What is the Car Milage? (in km)"
              placeholder="187000"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="color"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={color ? color : undefined}
              icon={colorSelect.icon}
              placeholder={colorSelect.placeholder}
              itemList={colorSelect.list}
              onChange={field.onChange}
              label="Select the Color"
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
