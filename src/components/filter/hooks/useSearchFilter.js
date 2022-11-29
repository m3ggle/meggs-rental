import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { cleanUpFilterData } from "../../../helper/filter/cleanUpFilterData";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";

export const useSearchFilter = () => {
  // const { control, handleSubmit, setValue, watch } = useForm();
  const { control, setValue, watch } = useForm();
  const { searchParams, setArrayOfParams, deleteSingleParam } =
    useUrlManipulation();

  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const watchAllFields = watch();

  const handleSubmit = () => {
    onSubmit(watchAllFields);
  };

  const onSubmit = (data) => {
    const formatted = cleanUpFilterData(data);
    formatted && setArrayOfParams(formatted);
  };

  useEffect(() => {
    setValue("search", searchParams.get("search"));
  }, [setValue, searchParams]);

  const handleDelete = (inputName, inputValue) => {
    setValue(inputName, inputValue);
    deleteSingleParam(inputName);
  };

  return {
    handleDelete,
    isOpen,
    onSubmit,
    closeModal,
    openModal,
    control,
    handleSubmit,
    watchAllFields,
  };
};
