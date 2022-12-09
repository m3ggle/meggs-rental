import React from "react";
import { useForm } from "react-hook-form";

const HomepageFooterMain = () => {
  const { register, handleSubmit, watch } = useForm();
  const { onChange, onBlur, name, ref } = register("firstName");
  const onSubmit = (data) => console.log(data);

  const textInTheFooter =
    "text-lmGrey600 cursor-pointer w-fit hover:text-lmGrey800 active:text-lmPrimary duration-300";

  return (
    <div className="h-fit w-full px-14 z-20">
      <div className="flex h-fit w-full gap-6 rounded-[30px] bg-white p-6 shadow-lg">
        {/* first col */}
        <div className="flex w-full flex-col gap-y-6 p-6">
          <h2 className="text-5xl text-lmGrey800">
            Contact the Developer directly
          </h2>
          <div
            className={`flex w-full items-center gap-x-3 border-b-2  ${
              watch("example")?.length > 0
                ? "border-lmGrey800"
                : "border-lmGrey300"
            } px-3 pt-6 pb-3 duration-300`}
          >
            <i
              className={`fa-solid fa-at text-[36px] ${
                watch("example")?.length > 0
                  ? "text-lmGrey800"
                  : "text-lmGrey300"
              } duration-300`}
            />
            <input
              autoCorrect="off"
              className="w-full bg-transparent text-4xl text-lmGrey800 placeholder:text-dmGrey300 focus:outline-none"
              placeholder="Your Email"
              {...register("example")}
              autoComplete="off"
            />
          </div>
        </div>

        {/* second col */}
        <div className="flex min-w-[320px] flex-col gap-y-8 p-2 text-lg text-lmGrey800">
          <div className="flex w-full flex-col gap-y-2">
            <span className="font-bold">Contact</span>
            <span className="text-lmGrey600">E-Mail: megglebande@web.de</span>
            <span className="text-lmGrey600">Address: Berlin, Germany</span>
          </div>

          <div className="flex w-full flex-col gap-y-2">
            <span className="font-bold">Authentication</span>
            <span className={textInTheFooter}>Sign In</span>
            <span className={textInTheFooter}>Sign Up</span>
            <span className={textInTheFooter}>Forgot Password</span>
          </div>
        </div>

        {/* third col */}
        <div className="flex min-w-[320px] flex-col gap-y-8 p-2 text-lg text-lmGrey800">
          <div className="flex w-full flex-col gap-y-2">
            <span className="font-bold">Support/Legal</span>
            <span className={textInTheFooter}>Help</span>
            <span className={textInTheFooter}>Terms</span>
            <span className={textInTheFooter}>Privacy</span>
            <span className={textInTheFooter}>Career</span>
            <span className={textInTheFooter}>Security</span>
          </div>

          <span className={textInTheFooter}>Open the Navigation</span>

          <div className="flex gap-11 text-[24px] text-lmGrey600">
            <i className="fa-brands fa-github cursor-pointer duration-300 hover:text-lmGrey800 active:text-lmPrimary" />
            <i className="fa-brands fa-instagram cursor-pointer duration-300 hover:text-lmGrey800 active:text-lmPrimary" />
            <i className="fa-brands fa-linkedin cursor-pointer duration-300 hover:text-lmGrey800 active:text-lmPrimary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageFooterMain;
