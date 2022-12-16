import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Btn from "../../../../../components/common/Btn";
import TextArea from "../../../../../components/input/TextArea";
import TextInput from "../../../../../components/input/TextInput";
import ModalWrapper from "../../../../../components/wrapper/ModalWrapper";

const HomepageContactModal = ({ isOpen, closeModal, email }) => {
  const { control, setValue, watch } = useForm();

  const [rightToSend, setRightToSend] = useState(false);

  const watchAllFields = watch();

  const buttonCondition = () => {
    if (Object.keys(watchAllFields).length < 2) {
      return false;
    }

    // check if one of the inputs is undefined
    let tempCondition = false;
    Object.values(watchAllFields).map((value) => {
      if (value === undefined) {
        tempCondition = true;
      }
    });
    if (tempCondition) {
      return false;
    }

    // check individual
    if (watchAllFields.firstName.length < 3) {
      console.log("firstName -_-");
      return false;
    }
    if (watchAllFields.lastName.length < 3) {
      console.log("lastName -_-");
      return false;
    }
    if (watchAllFields.content.length < 10) {
      console.log("content -_-");
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (buttonCondition()) {
      if (!rightToSend) {
        setRightToSend(true);
      }
    } else if (rightToSend) {
      setRightToSend(false);
    }
  }, [watchAllFields]);

  const handleDelete = (inputName, inputValue) => {
    setValue(inputName, inputValue);
  };

  const handleClickCheck = (e) => {
    rightToSend && handleSubmit(e);
  };

  const handleSubmit = (e) => {
    closeModal();
  };

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <form className="relative flex h-fit w-[340px] max-w-[340px] flex-col gap-y-3 rounded-lg pb-[90px]">
        <div className="flex flex-col gap-y-3">
          <span className="text-2xl text-lmGrey700 dark:text-dmGrey25">
            Contact Me :'D
          </span>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                firstIcon="fa-solid fa-signature"
                secondIcon="fa-solid fa-times"
                onChange={field.onChange}
                placeholder="your first name"
                value={field.value}
                onBlur={field.onBlur}
                onDelete={() => handleDelete("firstName", "")}
                error={fieldState.error}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                firstIcon="fa-solid fa-signature"
                secondIcon="fa-solid fa-times"
                onChange={field.onChange}
                placeholder="your last name"
                value={field.value}
                onBlur={field.onBlur}
                onDelete={() => handleDelete("lastName", "")}
                error={fieldState.error}
              />
            )}
          />

          <Controller
            name="content"
            control={control}
            render={({ field, fieldState }) => (
              <TextArea
                onChange={field.onChange}
                placeholder="What do you wanna say?"
                value={field.value}
                name={field.name}
                onBlur={field.onBlur}
                error={fieldState.error}
              />
            )}
          />

          {/* send code */}
          {/* check code */}
          {/* if everything alright, display msg */}

          <div className="w-fit">
            <Btn
              onClick={handleClickCheck}
              type="button"
              uiType={rightToSend ? "primary" : "secondary"}
              title="Send"
              icon="fa-solid fa-chevron-right"
            />
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default HomepageContactModal;
