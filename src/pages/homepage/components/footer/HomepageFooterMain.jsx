import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HomepageContactModal from "./HomepageContactModal";

const HomepageFooterMain = () => {
  const { register, handleSubmit, watch } = useForm();
  const { onChange, onBlur, name, ref } = register("email");
  const onSubmit = (data) => console.log(data);

  const [showButton, setShowButton] = useState(false);
  const [emailAddress, setEmailAddress] = useState("")

  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  console.log(watch("email")?.length > 0);

  const handleChange = (e) => {
    const currentValue = e.target.value;

    if (currentValue.match(emailRegex) && !showButton) {
      setShowButton(true);
      setEmailAddress(currentValue);
      return;
    }

    if (!showButton) {
      setShowButton(false);
      return;
    }

    setShowButton(false);
  };

  console.log(watch("email")?.length > 0)

  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const textInTheFooter =
    "text-lmGrey600 cursor-pointer w-fit hover:text-lmGrey800 dark:text-dmGrey100 dark:hover:text-dmGrey25 active:text-lmPrimary dark:active:text-dmPrimary duration-300";

  const buttonVariants = {
    initial: { opacity: 0, width: 0, height: 0 },
    animate: { opacity: 1, width: "140px", height: "52px" },
    transition: { duration: 0.3 },
  };

  // recommendation: do not use react hook form, instead use good old useState to rerender frequently

  return (
    <div className="z-20 h-fit w-full px-0 1200:px-14">
      <div className="flex h-fit w-full flex-col gap-6 rounded-[30px] bg-white p-6 shadow-lg dark:bg-dmGrey900 700:p-10 1200:flex-row 1200:p-6">
        {/* first col */}
        <div className="flex w-full flex-col gap-y-6 1200:p-6">
          <h2 className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
            Contact the <br /> Developer directly
          </h2>
          <div
            className={`flex w-full items-center gap-x-3 border-b-2  ${
              watch("email")?.length > 0
                ? "border-lmGrey800 dark:border-dmGrey25"
                : "border-lmGrey300 dark:border-dmGrey300"
            } px-3 pt-6 pb-3 duration-300`}
          >
            <i
              className={`fa-solid fa-at text-[20px] 700:text-[30px] 1200:text-[36px] ${
                watch("email")?.length > 0
                  ? "text-lmGrey800 dark:text-dmGrey25"
                  : "text-lmGrey300 dark:text-dmGrey300"
              } duration-300`}
            />
            <input
              autoCorrect="off"
              className="w-full bg-transparent text-xl text-lmGrey800 placeholder:text-dmGrey300 focus:outline-none dark:text-dmGrey25 700:text-3xl 1200:text-4xl"
              placeholder="Your Email"
              {...register("email")}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <AnimatePresence>
            {showButton && (
              <motion.button
                initial="initial"
                animate="animate"
                exit={{ opacity: 0 }}
                transition="transition"
                variants={buttonVariants}
                onClick={openModal}
                className="w-fit rounded-lg bg-lmPrimary py-3 px-4 shadow duration-300 hover:scale-101 hover:shadow-lg active:scale-99 active:shadow-sm dark:bg-dmPrimary dark:hover:bg-lmPrimary"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-x-2 text-lg font-semibold text-white"
                >
                  Next Step
                  <i className="fa-solid fa-chevron-right text-[16px]" />
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* second col */}
        <div className="flex min-w-[320px] flex-col gap-y-8 p-2 text-lg text-lmGrey800 dark:text-dmGrey25 700:flex-row 1200:flex-col">
          <div className="flex w-full flex-col gap-y-2">
            <span className="font-bold">Contact</span>
            <span className="text-lmGrey600 dark:text-dmGrey300">
              E-Mail: megglebande@web.de
            </span>
            <span className="text-lmGrey600 dark:text-dmGrey300">
              Address: Berlin, Germany
            </span>
          </div>

          <div className="flex w-full flex-col gap-y-2">
            <span className="font-bold">Authentication</span>
            <span className={textInTheFooter}>Sign In</span>
            <span className={textInTheFooter}>Sign Up</span>
            <span className={textInTheFooter}>Forgot Password</span>
          </div>
        </div>

        {/* third col */}
        <div className="flex min-w-[320px] flex-col gap-y-8 p-2 text-lg text-lmGrey800 dark:text-dmGrey25 700:flex-row 1200:flex-col">
          <div className="flex w-full flex-col gap-y-2">
            <span className="font-bold">Support/Legal</span>
            <span className={textInTheFooter}>Help</span>
            <span className={textInTheFooter}>Terms</span>
            <span className={textInTheFooter}>Privacy</span>
            <span className={textInTheFooter}>Career</span>
            <span className={textInTheFooter}>Security</span>
          </div>

          <div className="flex w-full flex-col gap-y-8 ">
            <span className={textInTheFooter}>Open the Navigation</span>

            <div className="flex gap-11 text-[24px] text-lmGrey600">
              <i className="fa-brands fa-github cursor-pointer duration-300 hover:text-lmGrey800 active:text-lmPrimary dark:text-dmGrey25" />
              <i className="fa-brands fa-instagram cursor-pointer duration-300 hover:text-lmGrey800 active:text-lmPrimary dark:text-dmGrey25" />
              <i className="fa-brands fa-linkedin cursor-pointer duration-300 hover:text-lmGrey800 active:text-lmPrimary dark:text-dmGrey25" />
            </div>
          </div>
        </div>
      </div>

      <HomepageContactModal
        isOpen={isOpen}
        closeModal={closeModal}
        email={emailAddress}
      />
    </div>
  );
};

export default HomepageFooterMain;
