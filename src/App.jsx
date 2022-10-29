import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function App() {
  // this in navbar

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setPreference();
  }, []);

  // on change
  const setPreference = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleChange = (e) => {
    // Todo: make it a dropdown
    //    options: lightMode, darkMode, system
    //    for lightMode do: localStorage.theme = 'light'
    //    for darkMode do: localStorage.theme = 'dark'
    //    for system do: localStorage.removeItem('theme')

    if (e) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    setPreference();

    setEnabled(e);
  };

  // when closing window, clear localStorage
  window.onbeforeunload = function () {
    localStorage.clear();
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-xl font-bold ">
        Tailwind Headless UI{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Switch (Toggle)
        </span>
      </h1>
      <div className="ml-28">
        <Switch
          checked={enabled}
          onChange={(e) => handleChange(e)}
          // onChange={setEnabled}
          className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </div>

      <div className="w-[360px] h-[180px] bg-black rounded-lg flex justify-center items-center">
        <div className="w-5/6 h-4/6 rounded-lg bg-white dark:bg-dmGrey600"></div>
      </div>
    </div>
  );
}
