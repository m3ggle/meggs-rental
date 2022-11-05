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

const reviewRating = {
  totalAmount: 102,
  ratingDetailed: {
    ratingFive: 24,
    ratingFour: 46,
    ratingThree: 10,
    ratingTwo: 2,
    ratingOne: 20,
  },
};

const reviews = [
  {
    displayName: "Gustavo Bravo",
    userId: "3985235c-702a-44be-943f-6a58045d273c",
    userProfilePicture:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    timestamp: "5. July 2022",
    rating: 4,
    reviewContent:
      "Tortor mi adipiscing et enim arcu cursus. Faucibus ac auctor commodo lobortis egestas convallis. Morbi scelerisque diam porta pellentesque. Vel vitae, justo, dui vel in praesent.",
  },
  {
    displayName: "Alina Mertens",
    userId: "713376b8-bc65-4709-9e69-cf45c5c7bb37",
    userProfilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    timestamp: "8. April 2022",
    rating: 3,
    reviewContent:
      "Proin sed mauris faucibus malesuada. Leo tincidunt tortor lectus sagittis, neque. Viverra mi vulputate quis amet neque tempor vitae nam nisi. Nulla sodales maecenas feugiat feugiat pellentesque sed. Faucibus posuere diam nibh odio non sed et egestas lectus. Tellus at ac dictum gravida viverra pellentesque arcu.",
  },
  {
    displayName: "Olivia Kahn",
    userId: "79598150-5d15-4542-9808-c8743fef26aa",
    userProfilePicture:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2261&q=80",
    timestamp: "4. April 2022",
    rating: 5,
    reviewContent:
      "Lobortis pellentesque non leo ac lorem interdum odio. Donec facilisi ut egestas commodo viverra pulvinar commodo.",
  },
  {
    displayName: "Nele Langrock",
    userId: "58be4286-ee5b-4c00-8ade-3019f744de20",
    userProfilePicture:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80",
    timestamp: "18. April 2022",
    rating: 4,
    reviewContent:
      "Augue fringilla viverra id tristique malesuada cras urna. A mi elementum ultrices bibendum mi sed turpis.",
  },
];

const reviewId = {
  ...reviewRating,
  reviews,
};

const ExampleData = () => {
    return { carSpecData, filterSelects, userProfileBig, reviews, reviewRating, reviewId };
}

export default ExampleData;
