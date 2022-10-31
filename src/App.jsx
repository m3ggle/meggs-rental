import Select from "./components/Select";
import Dropdown from "./components/Dropdown";
import DropdownMode from "./components/DropdownMode"
import TextInput from "./components/TextInput"
import TestInput from "./TestInput";
// import Spline from "@splinetool/react-spline";


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

export default function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-dmGrey900">
      <Select
        icon={transmissionSelect.icon}
        placeholder={transmissionSelect.placeholder}
        itemList={transmissionSelect.list}
      />
      <Dropdown />
      <DropdownMode />
      <TextInput />
      <TestInput />
    </div>
  );
}

{/* <Spline scene="https://prod.spline.design/og6CZMxsQfdlo-uE/scene.splinecode" /> */}