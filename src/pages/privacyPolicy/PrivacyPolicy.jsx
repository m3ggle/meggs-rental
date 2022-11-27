import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Btn from "../../components/common/Btn";
import TextInput from "../../components/input/TextInput";

const PrivacyPolicy = () => {
  const { control, handleSubmit, register, setValue } = useForm();
  const [hiddenValue, setHiddenValue] = useState("init")
  
  const onSubmit = (data) => console.log(data);
  
  const handleSetValue = () => {
    // setValue("hidden", "nothing")
    setHiddenValue("nothing");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-screen w-full flex-col items-center justify-center gap-y-2 bg-slate-300"
    >
      <Controller
        name="firstName"
        control={control}
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-magnifying-glass"
            onChange={field.onChange}
            label="What is your first name?"
            placeholder="Meggle"
            value={field.value}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
      />
      <input {...register("lastName")} />
      <input
        {...register("hidden", { value: hiddenValue, onChange: hiddenValue })}
        type="hidden"
      />
      <div className="flex w-[340px] flex-col gap-y-2">
        <Btn
          type="submit"
          uiType="primary"
          title="Click to submit"
          onSubmit={handleSubmit}
        />
        <Btn
          type="button"
          uiType="secondary"
          title="Click to set a value"
          onClick={handleSetValue}
        />
      </div>
    </form>
  );
};

export default PrivacyPolicy;
