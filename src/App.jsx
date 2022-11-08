import DropdownMode from "./components/DropdownMode";
// import Spline from "@splinetool/react-spline";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./components/Navbar";
import ExampleData from "./ExampleData";

export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const { userProfileBig } = ExampleData();

  // test
  let [isOpen, setIsOpen] = useState(true);
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  //bg-white dark:bg-dmGrey900

  return (
    <div
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-scroll bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
      }}
    >
      <div className="hidden">
        <DropdownMode />
      </div>
      {/* <div className="flex w-[360px] 600:w-[489px] justify-center rounded-2xl py-6 px-4 shadow overflow-scroll h-[640px]">
        <ReviewSection />
      </div> */}
      <div className="w-[360px]">
        {/* <UserProfileBig userData={userProfileBig} /> */}
      </div>

      {/* <div onClick={openModal} className="w-[360px]">
        <UserProfileSmall
          review={true}
          rating="4"
          text="Click to view the owners account"
          displayName="Meggle Bande"
          profilePic="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80"
        />
      </div>
      <UserProfile
        isOpen={isOpen}
        closeModal={closeModal}
      /> */}

      {/* <MobileCatalog /> */}

      <Navbar isOpen={isOpen} closeModal={closeModal} />

      {/* Logo stuff */}
      <div
        className={`fixed ${isOpen ? "bottom-[-100px]" : "bottom-10"} z-50 flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-full duration-300 hover:scale-105 active:scale-95 800:h-[84px] 800:w-[84px]`}
        onClick={openModal}
      >
        <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" />
      </div>
    </div>
  );
}

{
  /* <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" /> */
}
