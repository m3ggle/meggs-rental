import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import TextArea from "../../../components/input/TextArea";
import TextInput from "../../../components/input/TextInput";
import AutocompleteWrapperCity from "../../../components/wrapper/AutocompleteWrapperCity";
import { useUploadOfferBasicsOnSubmit } from "../hooks/useUploadOfferBasicsOnSubmit";

const UploadOfferBasics = ({ handleCallback }) => {
  const { offerName, offerLocation, offerDescription } =
    JSON.parse(localStorage.getItem("uploadData")) ?? false;

  const { control, handleSubmit, setError } = useForm();
  const { onSubmit } = useUploadOfferBasicsOnSubmit({
    handleCallback,
    setError,
  });

  const autocompleteCallback = (data) => localStorage.setItem("uploadOfferLocation", JSON.stringify(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[340px] flex-col gap-y-8"
    >
      <div className="flex w-full flex-col gap-y-2">
        <span className="text-base font-semibold text-lmGrey600 dark:text-dmGrey100">
          Offer Basics
        </span>
        <Controller
          name="offerName"
          control={control}
          rules={{
            required: "Name is required",
          }}
          defaultValue={offerName ? offerName : undefined}
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
        <AutocompleteWrapperCity
          control={control}
          label="Where is your offer located?"
          value={offerLocation ? offerLocation.name : null}
          callback={autocompleteCallback}
        />
        <Controller
          name="offerDescription"
          control={control}
          defaultValue={offerDescription ? offerDescription : undefined}
          render={({ field, fieldState }) => (
            <TextArea
              onChange={field.onChange}
              label="Shortly describe the offer (recommended)"
              placeholder="It's already 14 years old but always reliable when its needed. It would be too bad for the little blue darling to collect dust in the garage.
If you are interested, send me a message."
              value={field.value}
              name={field.name}
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

export default UploadOfferBasics;

/*
She's already 14 years old but always reliable when its needed. It would be too bad for the little blue darling to collect dust in the garage.
If you are interested, send me a message.
*/
