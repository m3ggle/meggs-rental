import React from "react";
import { Controller, useForm } from "react-hook-form";
import MobileCatalogAutocomplete from "../../../../components/filter/MobileCatalogAutocomplete";
import Select from "../../../../components/input/Select";
import TextArea from "../../../../components/input/TextArea";
import TextInput from "../../../../components/input/TextInput";
import Loading from "../../../../components/Loading";
import SignWrapper from "../../../../components/wrapper/SignWrapper";
import { useDarkModeContext } from "../../../../context/darkMode/darkModeContext";
import { useUserContext } from "../../../../context/user/userContext";
import ExampleData from "../../../../data/dataCollection";
import {
  regexName,
  regexTelephoneNumber,
} from "../../../../helpers/regexCollection";
import ProfileSubPageHeader from "../../components/ProfileSubPageHeader";
import { PPIUserData } from "./hooks/PPIUserData";
import { usePPIOnSubmit } from "./hooks/usePPIOnSubmit";

const { genderSelect, yesNoSelect } = ExampleData();

const ProfilePersonalInformation = () => {
  const { control, handleSubmit } = useForm();
  const { darkMode } = useDarkModeContext();
  const { profilePictureUrl } = useUserContext();
  const { userData } = PPIUserData();
  const { onSubmit } = usePPIOnSubmit(userData);

  const autocompleteCallback = (formData) => {
    const preferredCity = {
      name: formData.name,
      bounds: formData.extraInfo.bounds,
      center: formData.extraInfo.center,
    };
    localStorage.setItem(
      "personalInformationPreferredCity",
      JSON.stringify(preferredCity)
    );
  };

  return (
    <>
      <SignWrapper puffer={false} pic={profilePictureUrl}>
        <div className="hideScrollbar flex w-full max-w-[348px] flex-col gap-y-3 overflow-y-scroll px-[2px] py-6">
          <ProfileSubPageHeader title="Personal Information" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-y-3"
          >
            {userData.userId !== null ? (
              <>
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
                  defaultValue={userData.firstName ?? undefined}
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
                  defaultValue={userData.lastName ?? undefined}
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
                  defaultValue={userData.birthday ?? undefined}
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
                  name="gender"
                  control={control}
                  defaultValue={userData.gender ?? undefined}
                  render={({ field, fieldState }) => (
                    <Select
                      icon={genderSelect.icon}
                      value={userData.gender ?? undefined}
                      placeholder={genderSelect.placeholder}
                      itemList={genderSelect.list}
                      onChange={field.onChange}
                      label="What is your gender?"
                      error={fieldState.error}
                    />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  shouldUnregister={true}
                  rules={{
                    pattern: {
                      value: regexTelephoneNumber,
                      message: "Not a valid phone number.",
                    },
                  }}
                  defaultValue={userData.phone ?? undefined}
                  render={({ field, fieldState }) => (
                    <TextInput
                      firstIcon="fa-solid fa-phone"
                      onChange={field.onChange}
                      label="Phone number (coming soon)"
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
                  value={`${userData.city}, ${userData.province}, ${userData.country}`}
                  definedActions="mapCatalog"
                  control={control}
                  callbackFunction={autocompleteCallback}
                />
                <Controller
                  name="smoker"
                  control={control}
                  defaultValue={(userData.smoker ? "Yes" : "No") ?? undefined}
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
                  defaultValue={userData.bio ?? undefined}
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
              </>
            ) : (
              <Loading />
            )}
          </form>
        </div>
      </SignWrapper>
    </>
  );
};

export default ProfilePersonalInformation;
