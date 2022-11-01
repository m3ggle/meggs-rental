import Select from "./components/input/Select";
import Dropdown from "./components/Dropdown";
import DropdownMode from "./components/DropdownMode"
import TextInput from "./components/input/TextInput"
// import Spline from "@splinetool/react-spline";
import Test from "./components/input/testSamples/Test"

const transmissionSelect = {
  icon: "fa-solid fa-gears",
  placeholder: "Transmission",
  list: ["Automatic", "Manual"],
};
const seatSelect = {
  icon: "fa-solid fa-chair",
  placeholder: "Seats",
  list: [2, 3, 4, 5, 6, 7],
};

const handleCallback = (call) => {
  console.log(call)
}

export default function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-dmGrey900">
      {/* <Select
        icon={transmissionSelect.icon}
        placeholder={transmissionSelect.placeholder}
        itemList={transmissionSelect.list}
      />
      <Dropdown /> */}
      <div className="hidden">
      <DropdownMode />
      </div>
      {/* <TextInput
        firstIcon="fa-solid fa-magnifying-glass"
        required={true}
        callback={handleCallback}
      /> */}

      <Test />
    </div>
  );
}

{/* <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" /> */}