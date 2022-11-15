import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Btn from "../../../components/Btn";
import Select from "../../../components/input/Select";
import TextInput from "../../../components/input/TextInput";
import ExampleData from "../../../ExampleData";
import ModalWrapper from "../../../layouts/ModalWrapper";

const FilterModal = ({
  isOpen,
  closeModal,
  handleFilterCallback,
  setOutsideSearch,
  handleDeleteInput,
}) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { control, handleSubmit, setValue, formState } = useForm();
  const [resetCount, setResetCount] = useState(0)

  const cleanUpFilterData = (data) => {
    let allActives = {};
    Object.entries(data).map((item) => {
      if (item[1] !== undefined && item[1] !== "") {
        allActives[item[0]] = item[1];
      }
    });
    return allActives;
  };

  const onSubmit = (data) => {
    data.search && setOutsideSearch(data.search);
    handleFilterCallback(cleanUpFilterData(data));
    closeModal();
  };

  // updating search inside filterModal
  useEffect(() => {
    searchParams.get("search") &&
      setValue("search", searchParams.get("search"));
  }, [setValue, searchParams]);

  // when modal closes it is not unmounted, it is still mounted so the resetCount does not get reset, this will solve it
  useEffect(() => {
    setResetCount(0)
  }, [isOpen])

  const handleSearchDelete = () => {
    handleDeleteInput("search", "");
    setValue("search", "");
  };

  const handleDelete = (inputName, inputValue) => {
    setValue(inputName, inputValue);
    searchParams.delete(inputName);
    setSearchParams(searchParams);
  };

  const { filterSelects } = ExampleData();
  const {
    transmissionSelect,
    fuelSelect,
    seatSelect,
    trunkSelect,
    colorSelect,
    smokingSelect,
  } = filterSelects;

  const handleClearAll = () => {
    Object.keys(formState.dirtyFields).map((item) => {
      setValue(item, undefined);
    });
    setResetCount(prevState => prevState + 1)
  };

  // todo: set default values depending on url
  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // w-80
        className="relative flex h-fit w-[340px] max-w-[340px] flex-col gap-y-3 rounded-lg"
      >
        <div className="flex flex-col gap-y-3">
          <span className="text-2xl text-lmGrey700 dark:text-dmGrey25">
            Filter
          </span>

          <Controller
            name="search"
            control={control}
            defaultValue={
              searchParams.get("search")
                ? searchParams.get("search")
                : undefined
            }
            render={({ field, fieldState }) => (
              <TextInput
                firstIcon="fa-solid fa-magnifying-glass"
                secondIcon="fa-solid fa-times"
                onChange={field.onChange}
                placeholder="Audi A8"
                value={field.value}
                onBlur={field.onBlur}
                onDelete={handleSearchDelete}
                error={fieldState.error}
              />
            )}
          />

          <div className="gap-y-1">
            <div className="flex gap-x-2">
              <Controller
                name="startDate"
                control={control}
                defaultValue={
                  searchParams.get("startDate")
                    ? searchParams.get("startDate")
                    : undefined
                }
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-calendar-days"
                    secondIcon="fa-solid fa-times"
                    onChange={field.onChange}
                    onDelete={() => handleDelete("startDate", "")}
                    label="Start date"
                    placeholder="02.06.2023"
                    type="text"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
              <Controller
                name="endDate"
                control={control}
                defaultValue={
                  searchParams.get("endDate")
                    ? searchParams.get("endDate")
                    : undefined
                }
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-calendar-days"
                    secondIcon="fa-solid fa-times"
                    onChange={field.onChange}
                    onDelete={() => handleDelete("endDate", "")}
                    label="End date"
                    placeholder="21.06.2023"
                    type="text"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
            </div>
          </div>

          <div className="gap-y-1">
            <div className="flex gap-x-2">
              <Controller
                name="startPrice"
                control={control}
                defaultValue={
                  searchParams.get("startPrice")
                    ? searchParams.get("startPrice")
                    : undefined
                }
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-coins"
                    secondIcon="fa-solid fa-times"
                    onChange={field.onChange}
                    onDelete={() => handleDelete("startPrice", "")}
                    label="Start price"
                    placeholder="30..."
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
              />
              <Controller
                name="endPrice"
                control={control}
                defaultValue={
                  searchParams.get("endPrice")
                    ? searchParams.get("endPrice")
                    : undefined
                }
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-coins"
                    secondIcon="fa-solid fa-times"
                    onDelete={() => handleDelete("endPrice", "")}
                    onChange={field.onChange}
                    label="End price"
                    placeholder="300..."
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers are allowed",
                  },
                }}
              />
            </div>
          </div>

          <div className=" flex flex-col gap-y-1">
            <span className="text-sm text-lmGrey500 dark:text-dmGrey100">
              Car Specifics
            </span>
            <div className="flex flex-col gap-y-2">
              <Controller
                name="transmission"
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    value={
                      searchParams.get("transmission")
                        ? searchParams.get("transmission")
                        : undefined
                    }
                    icon={transmissionSelect.icon}
                    placeholder={transmissionSelect.placeholder}
                    itemList={transmissionSelect.list}
                    onChange={field.onChange}
                    label={transmissionSelect.label}
                    error={fieldState.error}
                    reset={resetCount}
                  />
                )}
              />
              <Controller
                name="fuelType"
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    value={
                      searchParams.get("fuelType")
                        ? searchParams.get("fuelType")
                        : undefined
                    }
                    icon={fuelSelect.icon}
                    placeholder={fuelSelect.placeholder}
                    itemList={fuelSelect.list}
                    onChange={field.onChange}
                    label={fuelSelect.label}
                    error={fieldState.error}
                    reset={resetCount}
                  />
                )}
              />
              <Controller
                name="seats"
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    value={
                      searchParams.get("seats")
                        ? searchParams.get("seats")
                        : undefined
                    }
                    icon={seatSelect.icon}
                    placeholder={seatSelect.placeholder}
                    itemList={seatSelect.list}
                    onChange={field.onChange}
                    label={seatSelect.label}
                    error={fieldState.error}
                    reset={resetCount}
                  />
                )}
              />
              <Controller
                name="trunkVolume"
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    value={
                      searchParams.get("trunkVolume")
                        ? searchParams.get("trunkVolume")
                        : undefined
                    }
                    icon={trunkSelect.icon}
                    placeholder={trunkSelect.placeholder}
                    itemList={trunkSelect.list}
                    onChange={field.onChange}
                    label={trunkSelect.label}
                    error={fieldState.error}
                    reset={resetCount}
                  />
                )}
              />
              <Controller
                name="color"
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    value={
                      searchParams.get("color")
                        ? searchParams.get("color")
                        : undefined
                    }
                    icon={colorSelect.icon}
                    placeholder={colorSelect.placeholder}
                    itemList={colorSelect.list}
                    onChange={field.onChange}
                    label={colorSelect.label}
                    error={fieldState.error}
                    reset={resetCount}
                  />
                )}
              />
              <Controller
                name="smoking"
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    value={
                      searchParams.get("smoking")
                        ? searchParams.get("smoking")
                        : undefined
                    }
                    icon={smokingSelect.icon}
                    placeholder={smokingSelect.placeholder}
                    itemList={smokingSelect.list}
                    onChange={field.onChange}
                    label={smokingSelect.label}
                    error={fieldState.error}
                    reset={resetCount}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full gap-x-2">
          <Btn
            type="button"
            uiType="secondary"
            onClick={handleClearAll}
            title="Clear Filter"
          />
          <Btn
            type="submit"
            uiType="primary"
            onClick={handleSubmit}
            title="Update Filter"
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default FilterModal;
