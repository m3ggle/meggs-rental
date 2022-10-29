import Select from "./components/Select";
import Dropdown from "./components/Dropdown";

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
    </div>
  );
}
