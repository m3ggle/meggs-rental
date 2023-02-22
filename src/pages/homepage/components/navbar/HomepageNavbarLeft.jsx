import React from "react";
import { useNavigationContext } from "../../../../context/navigation/navigationContext";
import { smoothScroll } from "../../../../hooks/useSmoothScroll";

const HomepageNavbarLeft = () => {
  const { dispatchNavigation } = useNavigationContext();
  const openModal = () => {
    dispatchNavigation({ type: "OPEN_NAVIGATION" });
  };

  return (
    <div className="flex w-fit cursor-pointer items-center gap-x-1 700:w-60">
      <img
        onClick={openModal}
        src="https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/logos/meggs_rental_logo.webp"
        className="h-14 w-14 object-cover object-center drop-shadow-2xl duration-300 hover:scale-110 active:scale-99"
        alt="logo"
        loading="lazy"
      />
      <span
        onClick={() => smoothScroll("hero")}
        className="text-lg text-lmGrey800 dark:text-dmGrey25"
      >
        Meggs Rental
      </span>
    </div>
  );
};

export default HomepageNavbarLeft;
