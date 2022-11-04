import DropdownMode from "./components/DropdownMode";
// import Spline from "@splinetool/react-spline";
import { useForm } from "react-hook-form";
import UserProfileBig from "./components/userProfile/UserProfileBig";
import ExampleData from "./ExampleData";

export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const {userProfileBig} = ExampleData()

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-dmGrey900">
      <div className="hidden">
        <DropdownMode />
      </div>

      <UserProfileBig userData={userProfileBig} />
    </div>
  );
}

{
  /* <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" /> */
}
