import React from "react";
import { useForm } from "react-hook-form";
import Select from "./Select";

const transmissionSelect = {
  icon: "fa-solid fa-gears",
  placeholder: "Transmission",
  list: ["Automatic", "Manual"],
};

const TextInput = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[264px] flex-col gap-2"
    >
      <label
        htmlFor="test"
        className="text-sm text-lmGrey800 dark:text-dmGrey25"
      >
        Test Input
      </label>
      <div className="flex gap-x-2 rounded-lg bg-lmGrey50 py-[10px] px-3 shadow-sm dark:bg-dmGrey800">
        <div className="flex h-full w-[14px] items-center justify-center">
          <i className="fa-solid fa-magnifying-glass h-[14px] w-[14px] text-lmGrey300 dark:text-dmGrey300"></i>
        </div>
        <input
          {...register("test")}
          type="text"
          name="test"
          placeholder="Test Input..."
          className="w-full bg-transparent text-sm text-lmGrey600 placeholder:text-dmGrey300 focus:outline-none dark:text-lmGrey600 placeholder:dark:text-dmGrey300"
        />
      </div>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <Select
        {...register("brain")}
        icon={transmissionSelect.icon}
        placeholder={transmissionSelect.placeholder}
        itemList={transmissionSelect.list}
      />

      {errors.exampleRequired && <span>This field is required</span>}
      <button
        type="submit"
        className="rounded-lg bg-slate-500 px-6 py-2 text-slate-50 shadow-sm"
      >
        Click to test submit
      </button>
    </form>
  );
};

export default TextInput;
