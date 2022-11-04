const carSpecData = {
  condition: {
    title: "Condition",
    value: "Very Good",
    icon: "fa-solid fa-car-on",
  },
  transmission: {
    title: "Transmission",
    value: "Manual",
    icon: "fa-solid fa-gears",
  },
  fuelType: {
    title: "Fuel Type",
    value: "Gas",
    icon: "fa-solid fa-gas-pump",
  },
  carType: {
    title: "Car Type",
    value: "Oldtimer",
    icon: "fa-solid fa-car",
  },
  milage: {
    title: "Milage",
    value: "250.000",
    icon: "fa-solid fa-gauge",
  },
  color: {
    title: "Color",
    value: "White",
    icon: "fa-solid fa-palette",
  },
  trunkVolume: {
    title: "Trunk Volume",
    value: "4 Suitcases",
    icon: "fa-solid fa-suitcase",
  },
  seats: {
    title: "Seats",
    value: "5 Seats",
    icon: "fa-solid fa-chair",
  },
  smoking: {
    title: "Smoking",
    value: "Yes",
    icon: "fa-solid fa-smoking",
  },
  eating: {
    title: "Eating",
    value: "No",
    icon: "fa-solid fa-utensils",
  },
};

const transmissionSelect = {
  label: null,
  icon: "fa-solid fa-gears",
  placeholder: "Which transmission?",
  list: ["Automatic", "Manual"],
};

const fuelSelect = {
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

const trunkSelect = {
  label: null,
  icon: "fa-solid fa-suitcase",
  placeholder: "How much trunk volume",
  list: [
    "3 suitcases",
    "4 suitcases",
    "5 suitcases",
    "6 suitcases",
    "7 suitcases",
    "8 suitcases",
  ],
};

const colorSelect = {
  label: null,
  icon: "fa-solid fa-palette",
  placeholder: "Which Color?",
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
  placeholder: "Smoking Allowed? ",
  list: ["Yes", "No"],
};

const filterSelects = {
  transmissionSelect: { ...transmissionSelect },
  fuelSelect: { ...fuelSelect },
  seatSelect: { ...seatSelect },
  trunkSelect: { ...trunkSelect },
  colorSelect: { ...colorSelect },
  smokingSelect: { ...smokingSelect },
};

const userProfileBig = {
  firstName: "Meggle",
  lastName: "Bande",
  birthday: "2001/10/21",
  email: "megglebande@web.de",
  joined: "July 2021",
  reviewsCount: "125",
  identityVerified: true,
};

const ExampleData = () => {
    return { carSpecData, filterSelects, userProfileBig };
}

export default ExampleData;
