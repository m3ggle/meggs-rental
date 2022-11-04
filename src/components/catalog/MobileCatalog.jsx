import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import Filter from "../filter/Filter";
import TextInput from "../input/TextInput";
import LittleOfferCard from "../LittleOfferCard";

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    icon: IconThree,
  },
];

const MobileCatalog = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // Todo: filter btn inside TextInput

  return (
    <Popover>
      {({ open }) => (
        <div
          className={`relative flex h-[640px] w-[360px] max-w-[360px] flex-col items-center gap-y-3 overflow-scroll rounded-2xl bg-white py-6 shadow-xl`}
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
              <Popover.Panel className="absolute left-0 right-0 top-20 bottom-0 z-30 flex h-fit w-full justify-center rounded-t-2xl bg-white p-6">
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

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
