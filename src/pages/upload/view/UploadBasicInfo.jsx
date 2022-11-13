import React from "react";
import { Controller, useForm } from "react-hook-form";
import Autocomplete from "../../../components/input/Autocomplete";
import TextInput from "../../../components/input/TextInput";
import ExampleData from "../../../ExampleData";
import BottomPart from "../../signUp/view/BottomPart";

const { citiesAutocomplete } = ExampleData();

const UploadBasicInfo = ({ handleCallback }) => {
  const { name, priceDay, priceWeek, priceMonth, startDate, endDate, city } =
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
          Basic Information
        </span>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name is required",
          }}
          defaultValue={name ? name : undefined}
          render={({ field, fieldState }) => (
            <TextInput
              firstIcon="fa-solid fa-signature"
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
          name="priceDay"
          control={control}
          rules={{
            required: "Price of the day is required",
            pattern: {
              value: /^\d+$/,
              message: "Only numbers are allowed",
            },
          }}
          defaultValue={priceDay ? priceDay : undefined}
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
          name="priceWeek"
          control={control}
          rules={{
            required: "Price for a week is required",
            pattern: {
              value: /^\d+$/,
              message: "Only numbers are allowed",
            },
          }}
          defaultValue={priceWeek ? priceWeek : undefined}
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
          name="priceMonth"
          control={control}
          rules={{
            required: "Price for a month is required",
            pattern: {
              value: /^\d+$/,
              message: "Only numbers are allowed",
            },
          }}
          defaultValue={priceMonth ? priceMonth : undefined}
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
        <div className="flex gap-x-2">
          <Controller
            name="startDate"
            control={control}
            rules={{
              required: "Start date is required",
            }}
            defaultValue={startDate ? startDate : undefined}
            render={({ field, fieldState }) => (
              <TextInput
                firstIcon="fa-solid fa-calendar-days"
                onChange={field.onChange}
                label="Start date"
                placeholder="02.06.2023"
                type="date"
                value={field.value}
                onBlur={field.onBlur}
                error={fieldState.error}
              />
            )}
          />
          <Controller
            name="endDate"
            control={control}
            rules={{
              required: "End date is required",
            }}
            defaultValue={endDate ? endDate : undefined}
            render={({ field, fieldState }) => (
              <TextInput
                firstIcon="fa-solid fa-calendar-days"
                onChange={field.onChange}
                label="End date"
                placeholder="21.06.2023"
                type="date"
                value={field.value}
                onBlur={field.onBlur}
                error={fieldState.error}
              />
            )}
          />
        </div>
        <Controller
          name="city"
          control={control}
          rules={{
            required: "City is required",
          }}
          render={({ field, fieldState }) => (
            <Autocomplete
              //   placeholder={citiesAutocomplete.placeholder}
              value={city ? city : undefined}
              itemList={citiesAutocomplete.list}
              onChange={field.onChange}
              label="Where is the offer/car located?"
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

export default UploadBasicInfo;
