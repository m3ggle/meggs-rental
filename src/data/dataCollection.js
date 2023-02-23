const transmissionSelect = {
  label: null,
  icon: "fa-solid fa-gears",
  placeholder: "Which transmission?",
  list: ["Automatic", "Manual"],
};

const conditionSelect = {
  label: null,
  icon: "fa-solid fa-car-on",
  placeholder: "Perfect",
  list: [],
};

const fuelTypeSelect = {
  label: null,
  icon: "fa-solid fa-gas-pump",
  placeholder: "Which fuel type?",
  list: ["Diesel", "Gas", "Electro"],
};

const seatSelect = {
  label: null,
  icon: "fa-solid fa-chair",
  placeholder: "How many seats?",
  list: ["2 seats", "3 seats", "4 seats", "5 seats", "6 seats", "7 seats"],
};

const trunkVolumeSelect = {
  label: null,
  icon: "fa-solid fa-suitcase",
  placeholder: "How many suitcases fit in your trunk?",
  list: [
    "3 suitcases",
    "4 suitcases",
    "5 suitcases",
    "6 suitcases",
    "7 suitcases",
    "8 suitcases",
  ],
};

const categorySelect = {
  label: null,
  icon: "fa-solid fa-car",
  placeholder: "Which transmission?",
  list: ["Coupe", "Sedan", "SUV", "Hatchback", "Sport", "Minivan"],
};

const colorSelect = {
  label: null,
  icon: "fa-solid fa-palette",
  placeholder: "Which color?",
  list: [
    "Yellow",
    "Green",
    "Blue",
    "Violet",
    "Red",
    "Orange",
    "White",
    "Black",
  ],
};

const smokingSelect = {
  label: null,
  icon: "fa-solid fa-smoking",
  placeholder: "Smoking allowed?",
  list: ["Yes", "No"],
};

const eatingSelect = {
  label: null,
  icon: "fa-solid fa-utensils",
  placeholder: "Eating allowed?",
  list: ["Yes", "No"],
};

const citiesAutocomplete = {
  // placeholder: "Dresden",
  list: ["Berlin", "Dresden", "Cologne", "Munich", "Paris", "New York"],
};

const filterSelects = {
  transmissionSelect: { ...transmissionSelect },
  fuelSelect: { ...fuelTypeSelect },
  seatSelect: { ...seatSelect },
  trunkSelect: { ...trunkVolumeSelect },
  colorSelect: { ...colorSelect },
  smokingSelect: { ...smokingSelect },
};

const genderSelect = {
  label: null,
  icon: "fa-solid fa-person",
  placeholder: "Gender",
  list: ["Male", "feMale", "Divers"],
};

const yesNoSelect = {
  label: null,
  icon: "fa-solid fa-circle-notch",
  placeholder: "Yes or No",
  list: ["Yes", "No"],
};

const filterTypes = [
  "search",

  "startDate",
  "endDate",
  "startPriceDay",
  "endPriceDay",
  "startPriceWeek",
  "endPriceWeek",
  "endPriceMonth",
  "startPriceMonth",

  // carSpec
  "color",
  "fuelType",
  "seats",
  "smoking",
  "transmission",
  "trunkVolume",
];

const navbarLinks = [
  {
    name: "Explore",
    linkTo: "explore",
  },
  {
    name: "Chat",
    linkTo: "chat",
  },
  // {
  //   name: "Search",
  //   linkTo: "directSearch",
  // },
  // {
  //   name: "Most Viewed",
  //   linkTo: "mostViewed",
  // },
  {
    name: "About",
    linkTo: "about",
  },
];

const browserLogos = {
  samsung:
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/logos/samsung%20internet%20logo.svg",
  edge: "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/logos/microsoft%20edge%20logo.svg",
  chrome:
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/logos/google%20chrome%20logo.svg",
  firefox:
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/logos/firefox%20logo.svg",
  opera:
    "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/website/logos/opera%20logo.svg",
};

const dataCollection = () => {
  return {
    filterTypes,
    citiesAutocomplete,
    filterSelects,
    navbarLinks,
    yesNoSelect,
    genderSelect,
    smokingSelect,
    transmissionSelect,
    conditionSelect,
    fuelTypeSelect,
    seatSelect,
    trunkVolumeSelect,
    categorySelect,
    colorSelect,
    eatingSelect,
    browserLogos,
  };
};

export default dataCollection;
