import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import Select from "../../../components/input/Select";
import TextInput from "../../../components/input/TextInput";
import { regexNumbersOnly } from "../../../helpers/regexCollection";
import { colorSelect, eatingSelect, smokingSelect } from "../data/uploadVehicleDetailsData";
import { useVD3GetOptions } from "../hooks/useVD3GetOptions";

const UploadVehicleDetails3 = ({ handleCallback }) => {
  const { kilometer, color, smokingAllowed, eatingAllowed } =
    JSON.parse(localStorage.getItem("uploadData")) ?? false;

    const {colors } = useVD3GetOptions();
  
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
          Car Specification - 3 (Trivia)
        </span>
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
          name="kilometer"
          control={control}
          rules={{
            required: "Kilometer is required",
            pattern: {
              value: regexNumbersOnly,
              message: "Invalid",
            },
          }}
          defaultValue={kilometer ? kilometer : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-gauge"
              type="number"
              onChange={field.onChange}
              label="What is the current kilometer reading?"
              placeholder="187000"
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="smokingAllowed"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={smokingAllowed ? smokingAllowed : undefined}
              icon={smokingSelect.icon}
              placeholder={smokingSelect.placeholder}
              itemList={smokingSelect.list}
              onChange={field.onChange}
              label="Select if Smoking is allowed"
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="eatingAllowed"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={eatingAllowed ? eatingAllowed : undefined}
              icon={eatingSelect.icon}
              placeholder={eatingSelect.placeholder}
              itemList={eatingSelect.list}
              onChange={field.onChange}
              label="Select if Eating is allowed"
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

export default UploadVehicleDetails3;
