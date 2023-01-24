import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Btn from "../../../../../components/common/Btn";
import supabase from "../../../../../config/supabaseClient";
import HomepageContactModal from "./HomepageContactModal";
import { useMainFirstLogic } from "./hooks/useMainFirstLogic";

const HomepageFooterMainFirst = () => {
  const { email, handleChange, showButton, isOpen, openModal, closeModal } =
    useMainFirstLogic();

  const buttonVariants = {
    initial: { opacity: 0, width: 0, height: 0 },
    animate: { opacity: 1, width: "140px", height: "52px" },
    transition: { duration: 0.3 },
  };

  const handleClick = async () => {
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      console.log(error)
      return 
    }

    console.log(data)
  }

  return (
    <div className="flex w-full flex-col gap-y-6 1200:p-6">
      <h2 className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow dark:text-dmGrey25 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
        Contact the <br /> Developer directly
      </h2>
      <div
        className={`flex w-full items-center gap-x-3 border-b-2  ${
          email.length > 0
            ? "border-lmGrey800 dark:border-dmGrey25"
            : "border-lmGrey300 dark:border-dmGrey300"
        } 1200:px-3 700:pt-3 1200:pt-6 pb-2 1200:pb-3 duration-300`}
      >
        <i
          className={`fa-solid fa-at text-[24px] 1200:text-[36px] ${
            email.length > 0
              ? "text-lmGrey800 dark:text-dmGrey25"
              : "text-lmGrey300 dark:text-dmGrey300"
          } duration-300`}
        />
        <input
          autoCorrect="off"
          className="w-full bg-transparent text-lmGrey800 placeholder:text-dmGrey300 focus:outline-none dark:text-dmGrey25 text-2xl 1200:text-4xl"
          placeholder="Your Email"
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

      <HomepageContactModal
        isOpen={isOpen}
        closeModal={closeModal}
        email={email}
      />

      <Btn
        onClick={handleClick}
        title="Get Session"
        type='button'
        uiType='primary'
      />
    </div>
  );
};

export default HomepageFooterMainFirst;
