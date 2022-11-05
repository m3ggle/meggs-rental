import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import Filter from "../filter/Filter";
import TextInput from "../input/TextInput";
import LittleOfferCard from "../LittleOfferCard";

const MobileCatalog = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // Todo: filter btn inside TextInput

  return (
    <Popover>
      {({ open }) => (
        <div
          className={`relative flex h-[640px] w-[360px] max-w-[360px] flex-col items-center gap-y-3 overflow-scroll rounded-2xl bg-white py-6 shadow-xl dark:bg-dmGrey900`}
        >
          <div className="w-[312px]">
            <Controller
              name="search"
              control={control}
              render={({ field, fieldState }) => (
                <TextInput
                  firstIcon="fa-solid fa-magnifying-glass"
                  onChange={field.onChange}
                  label="Search for a offer?"
                  placeholder="Audi A8"
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                  filter={true}
                />
              )}
              rules={{
                required: "Last name is required",
                minLength: { value: 3, message: "At least 3 Characters" },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Only letters are allowed",
                },
              }}
            />
          </div>

          <div className="flex w-full flex-grow flex-col items-center overflow-scroll rounded-lg pb-4">
            <div className={`flex w-[312px] flex-col gap-y-3 rounded-lg`}>
              <LittleOfferCard
                name="Tesla Model 3"
                location="Salzburger Straße 18"
                price="100"
                transmission="Automatic"
                seats={5}
              />
              <LittleOfferCard
                name="Tesla Model 3"
                location="Salzburger Straße 18"
                price="100"
                transmission="Automatic"
                seats={5}
              />
              <LittleOfferCard
                name="Tesla Model 3"
                location="Salzburger Straße 18"
                price="100"
                transmission="Automatic"
                seats={5}
              />
              <LittleOfferCard
                name="Tesla Model 3"
                location="Salzburger Straße 18"
                price="100"
                transmission="Automatic"
                seats={5}
              />
              <LittleOfferCard
                name="Tesla Model 3"
                location="Salzburger Straße 18"
                price="100"
                transmission="Automatic"
                seats={5}
              />
              <LittleOfferCard
                name="Tesla Model 3"
                location="Salzburger Straße 18"
                price="100"
                transmission="Automatic"
                seats={5}
              />
            </div>
          </div>

          <Transition>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-1500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-500"
              enterFrom="opacity-0 translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease duration-300"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-6"
            >
              <Popover.Panel className="absolute left-0 right-0 top-20 bottom-0 z-30 flex h-fit w-full justify-center rounded-t-2xl bg-white p-6 dark:bg-dmGrey900">
                {/* <Filter /> */}
                {({ close }) => <Filter onClose={close} />}
              </Popover.Panel>
            </Transition.Child>
          </Transition>
        </div>
      )}
    </Popover>
  );
};

export default MobileCatalog;
