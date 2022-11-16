import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import TextInput from '../../../../components/input/TextInput';

const ChatSidebarSearch = () => {
      const { control, handleSubmit } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
  
    return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full items-end gap-x-2"
    >
      <Controller
        name="search"
        control={control}
        rules={{
          required: "Name is required",
        }}
        render={({ field, fieldState }) => (
          <TextInput
            firstIcon="fa-solid fa-magnifying-glass"
            onChange={field.onChange}
            placeholder="Search for a chat"
            value={field.value}
            onBlur={field.onBlur}
            error={fieldState.error}
          />
        )}
      />

      <button
        type="submit"
        onClick={handleSubmit}
        className={`fa-solid fa-chevron-right flex h-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmPrimary text-base text-white dark:bg-dmPrimary dark:text-white`}
      />
    </form>
  );
}

export default ChatSidebarSearch