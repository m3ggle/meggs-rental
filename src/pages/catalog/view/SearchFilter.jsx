import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Search from "./Search";

const SearchFilter = ({
  firstIcon,
  secondIcon,
  onChange,
  onBlur,
  name,
  placeholder,
  value,
  label,
  error,
  type,
}) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="flex w-full max-w-[340px] flex-col gap-y-2"
        aria-invalid={error ? "true" : "false"}
      >
        <label
          htmlFor={name}
          className="text-sm text-lmGrey500 dark:text-dmGrey100"
        >
          {label}
        </label>
        {/* input and error*/}
        <div className="flex w-full flex-col gap-y-1">
          <div className="flex w-full gap-x-2">
            <Controller
              name="search"
              control={control}
              render={({ field, fieldState }) => (
                <Search
                  firstIcon="fa-solid fa-magnifying-glass"
                  onChange={field.onChange}
                  label="Search for a offer?"
                  placeholder="Audi A8"
                  value={field.value}
                  onBlur={field.onBlur}
                  error={fieldState.error}
                />
              )}
            />
            <>
              <button
                className={`fa-solid fa-filter flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmGrey50 text-base text-lmGrey200 dark:bg-lmGrey800 dark:text-dmGrey300`}
              />
              <button
                onClick={handleSubmit}
                className={`fa-solid fa-chevron-right flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg bg-lmPrimary text-base text-white dark:bg-dmPrimary dark:text-white`}
              />
            </>
          </div>
        </div>
      </div>

      {/* modal try */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </form>
  );
};

export default SearchFilter;
