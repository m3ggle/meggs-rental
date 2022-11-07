import DropdownMode from "./components/DropdownMode";
// import Spline from "@splinetool/react-spline";
import { useForm } from "react-hook-form";
import MobileCatalog from "./components/catalog/MobileCatalog";
import ExampleData from "./ExampleData";

export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const { userProfileBig } = ExampleData();

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-scroll bg-white dark:bg-dmGrey900">
      <div className="hidden">
        <DropdownMode />
      </div>
      {/* <div className="flex w-[360px] 600:w-[489px] justify-center rounded-2xl py-6 px-4 shadow overflow-scroll h-[640px]">
        <ReviewSection />
      </div> */}

      {/* <div className="w-[360px]">
      <UserProfileBig userData={userProfileBig} />
      </div> */}

      <MobileCatalog />
    </div>
  );
}

{
  /* <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" /> */
}
