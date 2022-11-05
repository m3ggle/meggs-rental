import DropdownMode from "./components/DropdownMode";
// import Spline from "@splinetool/react-spline";
import { useForm } from "react-hook-form";
import UserProfileBig from "./components/userProfile/UserProfileBig";
import ExampleData from "./ExampleData";
import UserProfileSmall from "./components/userProfile/UserProfileSmall";
import UserProfileChat from "./components/userProfile/UserProfileChat";
import ReviewSection from "./components/ratings/ReviewSection";

export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-dmGrey900">
      <div className="hidden">
        <DropdownMode />
      </div>

      <div className="flex w-[360px] items-center justify-center p-6 rounded-2xl shadow">
        <ReviewSection />
      </div>
    </div>
  );
}

{
  /* <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" /> */
}
