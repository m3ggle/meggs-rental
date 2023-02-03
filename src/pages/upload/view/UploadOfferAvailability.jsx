import { format, lastDayOfYear } from "date-fns";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import TextInput from "../../../components/input/TextInput";
import { useUploadOfferAvailabilityOnSubmit } from "../hooks/useUploadOfferAvailabilityOnSubmit";

const UploadOfferAvailability = ({ handleCallback }) => {
  const { startDate, endDate } =
    JSON.parse(localStorage.getItem("uploadData")) ?? false;

  const { control, handleSubmit, setError } = useForm();
  const { onSubmit } = useUploadOfferAvailabilityOnSubmit({ handleCallback, setError});

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <span className="text-base font-semibold text-lmGrey600 dark:text-dmGrey100">
          Offer Availability
        </span>
        {/* <div className="flex gap-x-2"> */}
        <Controller
          name="startDate"
          control={control}
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
        <span className="text-sm text-lmGrey300 dark:text-dmGrey300">
          {`By default is the starting date  ${format(
          new Date(),
          "d. MMM yyyy"
        )} and the end date (${format(
          lastDayOfYear(new Date()),
          "d. MMM yyyy"
            )}).`}
        </span>
        {/* </div> */}
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

export default UploadOfferAvailability;
