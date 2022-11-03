import OfferCard from "./components/catalog/OfferCard";
import DropdownMode from "./components/DropdownMode";
import Filter from "./components/filter/Filter";
// import Spline from "@splinetool/react-spline";
import Test from "./components/input/testSamples/Test";

export default function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-dmGrey900">

      <div className="hidden">
        <DropdownMode />
      </div>

      <Filter />

      {/* <Test /> */}
    </div>
  );
}

{
  /* <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" /> */
}
