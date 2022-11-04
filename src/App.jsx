import DropdownMode from "./components/DropdownMode";
// import Spline from "@splinetool/react-spline";
import { useForm } from "react-hook-form";
import MobileCatalog from "./components/catalog/MobileCatalog";

export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-dmGrey900">
      <div className="hidden">
        <DropdownMode />
      </div>

      <MobileCatalog />
      {/* <Test /> */}
    </div>
  );
}

{
  /* <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" /> */
}
