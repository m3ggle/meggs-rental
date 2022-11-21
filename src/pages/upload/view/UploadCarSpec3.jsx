import React from "react";
import { Controller, useForm } from "react-hook-form";
import BottomPart from "../../../components/authentication/BottomPart";
import Select from "../../../components/input/Select";
import TextArea from "../../../components/input/TextArea";
import ExampleData from "../../../ExampleData";

const { smokingSelect, eatingSelect } = ExampleData();

const UploadCarSpec3 = ({ handleCallback }) => {
      const { smoking, eating, carBio } =
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
          Car Specification - 3
        </span>
        <Controller
          name="smoking"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={smoking ? smoking : undefined}
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
          name="eating"
          control={control}
          rules={{ required: "Select an option" }}
          render={({ field, fieldState }) => (
            <Select
              value={eating ? eating : undefined}
              icon={eatingSelect.icon}
              placeholder={eatingSelect.placeholder}
              itemList={eatingSelect.list}
              onChange={field.onChange}
              label="Select if Eating is allowed"
              error={fieldState.error}
            />
          )}
        />
        <Controller
          name="carBio"
          control={control}
          defaultValue={carBio ? carBio : undefined}
          render={({ field, fieldState }) => (
            <TextArea
              onChange={field.onChange}
              label="Do you have additional remarks/notes"
              placeholder="She likes it gentle, then it is smooth sailing with my beauty :D"
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

export default UploadCarSpec3;
