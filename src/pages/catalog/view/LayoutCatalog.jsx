import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import OfferCard from "../../../components/catalog/OfferCard";
import FilterCatalog from "../../../components/filter/FilterCatalog";
import TextInput from "../../../components/input/TextInput";

import { useWindowSize } from "../../../hooks/useWindowSize";

const LayoutCatalog = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const size = useWindowSize();

  const filterRender = () => {
    if (size.width >= 1000) {
      return <FilterCatalog />;
    } else {
      return (
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
      );
    }
  };

  return (
    <div className="flex w-full max-w-[1440px] flex-col gap-6 p-6 600:p-12 1000:flex-row 1000:p-14">
      <Popover className="relative h-[68px] w-full 1000:flex 1000:h-full 1000:w-[340px] 1000:min-w-[340px] 1000:justify-center">
        <div className="hideScrollbar w-[340px] max-w-[340px] overflow-scroll pb-12 1000:fixed 1000:left-14 1000:top-14 1000:h-full">
          {filterRender()}
        </div>
      </Popover>
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
            {({ close }) => <FilterCatalog onClose={close} />}
          </Popover.Panel>
        </Transition.Child>
      </Transition>
      <div className="flex h-fit w-full flex-wrap justify-center gap-2 600:gap-4">
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
        <OfferCard
          name="Tesla Model 3"
          location="Salzburger Straße 18"
          price="100"
          transmission="Automatic"
          seats={5}
        />
      </div>
    </div>
  );
};

export default LayoutCatalog;
