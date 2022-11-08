import DropdownMode from "./components/DropdownMode";
// import Spline from "@splinetool/react-spline";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./components/Navbar";
import ExampleData from "./ExampleData";
import Example from "./components/offerDetails/Calendar";
import Calendar from "./components/offerDetails/Calendar";
import Preview from "./components/Preview";

export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const { userProfileBig } = ExampleData();

  // test
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <div
      className="relative flex h-screen w-full flex-col items-center p-40 overflow-scroll bg-white bg-cover bg-center dark:bg-dmGrey900"
      // style={{
      //   backgroundImage:
      //     "url(https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
      // }}
    >
      <div className="hidden">
        <DropdownMode />
      </div>

      <Navbar isOpen={isOpen} closeModal={closeModal} />
      {/* Logo stuff */}
      <div
        className={`fixed ${
          isOpen ? "bottom-[-100px]" : "bottom-10"
        } z-50 flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-full duration-300 hover:scale-105 active:scale-95 800:h-[84px] 800:w-[84px]`}
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
