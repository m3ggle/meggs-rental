import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import TextInput from "../../../components/input/TextInput";
import { regexPrice } from "../../../helpers/regexCollection";

const UploadOfferPrices = ({ handleCallback }) => {
  const { dayPrice, weekPrice, monthPrice } =
    JSON.parse(localStorage.getItem("uploadData")) ?? false;

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
          Offer Prices
        </span>
        <Controller
          name="dayPrice"
          control={control}
          rules={{
            required: "Price per day is required",
            pattern: {
              value: regexPrice,
              message: "Only numbers are allowed",
            },
          }}
          defaultValue={dayPrice ? dayPrice : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-coins"
              secondIcon="fa-solid fa-euro"
              onChange={field.onChange}
              label="What is the price per day?"
              placeholder="30..."
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="weekPrice"
          control={control}
          rules={{
            required: "Price per week is required",
            pattern: {
              value: regexPrice,
              message: "Only numbers are allowed",
            },
          }}
          defaultValue={weekPrice ? weekPrice : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-coins"
              secondIcon="fa-solid fa-euro"
              onChange={field.onChange}
              label="What is the price per week?"
              placeholder="200..."
              value={field.value}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="monthPrice"
          control={control}
          rules={{
            required: "Price per month is required",
            pattern: {
              value: regexPrice,
              message: "Only numbers are allowed",
            },
          }}
          defaultValue={monthPrice ? monthPrice : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-coins"
              secondIcon="fa-solid fa-euro"
              onChange={field.onChange}
              label="What is the price per month?"
              placeholder="500..."
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

export default UploadOfferPrices;
