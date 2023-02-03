import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import Select from "../../../components/input/Select";
import TextInput from "../../../components/input/TextInput";
import { regexNumbersOnly } from "../../../helpers/regexCollection";
import { categorySelect, colorSelect, conditionSelect } from "../data/uploadVehicleDetailsData";
import { useVD2GetOptions } from "../hooks/useVD2GetOptions";

const UploadVehicleDetails2 = ({ handleCallback }) => {
  const { category, vehicleCondition, milage, color } =
    JSON.parse(localStorage.getItem("uploadData")) ?? false;

    const { categories, conditions, colors } = useVD2GetOptions();
  
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
          name="color"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={color ? color : undefined}
              icon={colorSelect.icon}
              placeholder="Blue "
              itemList={colors}
              onChange={field.onChange}
              label="What color is the offer?"
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
