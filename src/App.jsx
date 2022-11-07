import DropdownMode from "./components/DropdownMode";
// import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UserProfileSmall from "./components/userProfile/UserProfileSmall";
import ExampleData from "./ExampleData";
import UserProfile from "./pages/userProfile/UserProfile";
import Navbar from "./components/Navbar";

export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const { userProfileBig } = ExampleData();

  // test
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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

      <Navbar />
    </div>
  );
}

{
  /* <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" /> */
}
