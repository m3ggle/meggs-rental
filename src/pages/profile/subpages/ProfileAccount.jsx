import React from "react";
import { Controller, useForm } from "react-hook-form";
import MobileCatalogAutocomplete from "../../../components/filter/MobileCatalogAutocomplete";
import Select from "../../../components/input/Select";
import TextArea from "../../../components/input/TextArea";
import TextInput from "../../../components/input/TextInput";
import SignWrapper from "../../../components/wrapper/SignWrapper";
import { useUserContext } from "../../../context/user/userContext";
import ExampleData from "../../../ExampleData";
import { auth } from "../../../firebase.config";
import {
  regexEmail,
  regexName,
  regexPassword,
  regexTelephoneNumber,
} from "../../../helper/regexCollection";
import ProfileSubPageHeader from "../components/ProfileSubPageHeader";
import { useProfileAccountLogic } from "./hooks/useProfileAccountLogic";

const { genderSelect, yesNoSelect } = ExampleData();

const ProfileAccount = () => {
  const { control, handleSubmit } = useForm();
  const { userData } = useUserContext();

  const { onSubmit, autocompleteCallback } = useProfileAccountLogic();

    // console.log("auth.currentUser", auth.currentUser);
    // console.log("user context", userData);

  // Todo: some are required and some not
  return (
    <>
      {userData !== null && (
        <SignWrapper puffer={false} pic={userData.photoURL}>
          <div className="hideScrollbar flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px] py-6">
            <ProfileSubPageHeader title="Account" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-y-3"
            >
              <Controller
                name="firstName"
                control={control}
                rules={{
                  required: "First name is required",
                  pattern: {
                    value: regexName,
                    message: "Only letter are allowed",
                  },
                }}
                defaultValue={userData.firstName}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-signature"
                    onChange={field.onChange}
                    label="First Name"
                    placeholder="Max"
                    type="text"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                rules={{
                  required: "Last name is required",
                  pattern: {
                    value: regexName,
                    message: "Only letter are allowed",
                  },
                }}
                defaultValue={userData.lastName}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-signature"
                    onChange={field.onChange}
                    label="Last Name"
                    placeholder="Musterman"
                    type="text"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
              <Controller
                name="birthday"
                control={control}
                rules={{
                  required: "Birthday is required",
                }}
                defaultValue={userData.birthday}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-calendar-days"
                    onChange={field.onChange}
                    label="Birthday"
                    placeholder="25.10.1999"
                    type="date"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: regexEmail,
                    message: "Invalid email address",
                  },
                }}
                defaultValue={userData.email}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-at"
                    onChange={field.onChange}
                    label="Email"
                    placeholder="maxMustermann@web.de"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
              <Controller
                name="oldPassword"
                control={control}
                rules={{
                  pattern: {
                    value: regexPassword,
                    message:
                      "Minimum 6 Characters - 1 upper and 1 lower case - 1 letter and 1 special character",
                  },
                }}
                defaultValue={null}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-lock"
                    onChange={field.onChange}
                    label="Old Password"
                    placeholder="••••••"
                    type="password"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
              <Controller
                name="newPassword"
                control={control}
                rules={{
                  pattern: {
                    value: regexPassword,
                    message:
                      "Minimum 6 Characters - 1 upper and 1 lower case - 1 letter and 1 special character",
                  },
                }}
                defaultValue={null}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-lock"
                    onChange={field.onChange}
                    label="New Password"
                    placeholder="••••••••••"
                    type="password"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
              <Controller
                name="gender"
                control={control}
                rules={{ required: "Select an option" }}
                defaultValue={userData.gender}
                render={({ field, fieldState }) => (
                  <Select
                    icon={genderSelect.icon}
                    value={userData.gender}
                    placeholder={genderSelect.placeholder}
                    itemList={genderSelect.list}
                    onChange={field.onChange}
                    label="What is your gender?"
                    error={fieldState.error}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  pattern: {
                    value: regexTelephoneNumber,
                    message: "Not a valid telephone number.",
                  },
                }}
                defaultValue={null}
                render={({ field, fieldState }) => (
                  <TextInput
                    firstIcon="fa-solid fa-phone"
                    onChange={field.onChange}
                    label="Telephone number (optional)"
                    placeholder="03 251 2342783"
                    type="text"
                    value={field.value}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
              <MobileCatalogAutocomplete
                label="Preferred city, city you live in"
                value={userData.preferredCity.name}
                definedActions="mapCatalog"
                control={control}
                callbackFunction={autocompleteCallback}
              />
              <Controller
                name="smoker"
                control={control}
                defaultValue={userData.smoker}
                render={({ field, fieldState }) => (
                  <Select
                    icon={genderSelect.icon}
                    value={userData.smoker ? "Yes" : "No"}
                    placeholder={yesNoSelect.placeholder}
                    itemList={yesNoSelect.list}
                    onChange={field.onChange}
                    label="Are you a smoker?"
                    error={fieldState.error}
                  />
                )}
              />
              <Controller
                name="bio"
                control={control}
                defaultValue={userData?.bio}
                render={({ field, fieldState }) => (
                  <TextArea
                    onChange={field.onChange}
                    label="A place for a short bio."
                    placeholder="I rather use my bike than driving in my car, so hit me up if you want to borrow it :D"
                    value={field.value}
                    name={field.name}
                    onBlur={field.onBlur}
                    error={fieldState.error}
                  />
                )}
              />
              <button
                type="submit"
                onClick={onSubmit}
                className="flex w-[340px] items-center justify-center rounded-lg bg-lmPrimary py-3 px-4 text-white shadow-md"
              >
                Submit changes
              </button>
            </form>
          </div>
        </SignWrapper>
      )}
    </>
  );
};

export default ProfileAccount;
