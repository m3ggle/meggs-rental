import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { cleanUpFilterData } from "../../../helper/filter/cleanUpFilterData";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";

export const useSearchFilter = () => {
  const { control, handleSubmit, setValue } = useForm();
  const { searchParams, setSingleParam, setArrayOfParams, deleteSingleParam } =
    useUrlManipulation();

  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onSubmit = (data) => {
    console.log(data)
    const formatted = cleanUpFilterData(data)
    console.log(formatted);
   formatted && setArrayOfParams(formatted);
    // const cleanedUpSearch = cleanUpFilterData(data).search;
    // cleanedUpSearch && setSingleParam("search", cleanedUpSearch);
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
  };
};
