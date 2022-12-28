const signUpRounds = [
  {
    title: "Create a new account",
  },
  {
    title: "Almost finished",
  },
  {
    title: "Last step, promised 🤞",
  },
];

const forgotPasswordRounds = [
  {
    title: "Forgot your password?",
    btnTitle: "Send Email",
  },
  {
    title: "Reset your password",
    btnTitle: "Reset password",
  },
];

const citiesAutocomplete = {
  // placeholder: "Dresden",
  list: ["Berlin", "Dresden", "Cologne", "Munich", "Paris", "New York"],
};

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
  placeholderOne: {
    title: "",
    value: "",
    icon: "",
  },
  placeholderTwo: {
    title: "",
    value: "",
    icon: "",
  },
};

const previewSpecs = [
  "transmission",
  "fuelType",
  "color",
  "trunkVolume",
  "seats",
  "smoking",
];

const eatingSelect = {
  label: null,
  icon: "fa-solid fa-utensils",
  placeholder: "Eating allowed?",
  list: ["Yes", "No"],
};

const carTypeSelect = {
  label: null,
  icon: "fa-solid fa-car",
  placeholder: "Which transmission?",
  list: ["Coupe", "Sedan", "SUV", "Hatchback", "Sport", "Minivan"],
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
  placeholder: "How much trunk volume?",
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

const filterSelects = {
  transmissionSelect: { ...transmissionSelect },
  fuelSelect: { ...fuelSelect },
  seatSelect: { ...seatSelect },
  trunkSelect: { ...trunkSelect },
  colorSelect: { ...colorSelect },
  smokingSelect: { ...smokingSelect },
};

const userProfileBig = {
  photoUrl:
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FprofilePic.webp?alt=media&token=6c64dddf-daf8-4d44-9b88-b2d8dd58be4a",
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
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FprofileGustavoBravo.webp?alt=media&token=1f49457e-bc4b-4f14-94f9-4c93a69f5b66",
    timestamp: "5. July 2022",
    rating: 4,
    reviewContent:
      "Tortor mi adipiscing et enim arcu cursus. Faucibus ac auctor commodo lobortis egestas convallis. Morbi scelerisque diam porta pellentesque. Vel vitae, justo, dui vel in praesent.",
  },
  {
    displayName: "Alina Mertens",
    userId: "713376b8-bc65-4709-9e69-cf45c5c7bb37",
    userProfilePicture:
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FprofileAlinaMertens.webp?alt=media&token=1f49457e-bc4b-4f14-94f9-4c93a69f5b66",
    timestamp: "8. April 2022",
    rating: 3,
    reviewContent:
      "Proin sed mauris faucibus malesuada. Leo tincidunt tortor lectus sagittis, neque. Viverra mi vulputate quis amet neque tempor vitae nam nisi. Nulla sodales maecenas feugiat feugiat pellentesque sed. Faucibus posuere diam nibh odio non sed et egestas lectus. Tellus at ac dictum gravida viverra pellentesque arcu.",
  },
  {
    displayName: "Maria Bierhoff",
    userId: "79598150-5d15-4542-9808-c8743fef26aa",
    userProfilePicture:
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FprofileMariaBierhoff.webp?alt=media&token=1f49457e-bc4b-4f14-94f9-4c93a69f5b66",
    timestamp: "4. April 2022",
    rating: 5,
    reviewContent:
      "Lobortis pellentesque non leo ac lorem interdum odio. Donec facilisi ut egestas commodo viverra pulvinar commodo.",
  },
  {
    displayName: "Nele Langrock",
    userId: "58be4286-ee5b-4c00-8ade-3019f744de20",
    userProfilePicture:
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/others%2FprofileNeleLangrock.webp?alt=media&token=1f49457e-bc4b-4f14-94f9-4c93a69f5b66",
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

const offerCard = {
  name: "Tesla Model 3",
  location: "Salzburger Straße 18",
  priceDay: "30",
  priceWeek: "150",
  priceMonth: "600",
  transmission: "Automatic",
  seats: 5,
};

const genderSelect = {
  label: null,
  icon: "fa-solid fa-person",
  placeholder: "Gender",
  list: ["Male", "feMale", "Divers"],
};

const messages = [
  {
    id: 1,
    owner: false,
    text: "Nibh venenatis eleifend turpis arcu eget. Urna, viverra dignissim nulla aliquet suspendisse a.",
  },
  {
    id: 2,
    owner: true,
    text: "Dolor risus, risus non rhoncus, leo sed platea sed. Tellus in convallis sagittis, risus accumsan sed orci, mattis blandit. Bibendum elementum ultrices nulla dictumst rhoncus, mauris, tristique justo.",
  },
  {
    id: 3,
    owner: false,
    text: "Nam quis faucibus consequat auctor.",
  },
  {
    id: 4,
    owner: false,
    text: "Neque sed molestie orci ut. Et diam vel vitae tristique amet aliquet at.",
  },
  {
    id: 5,
    owner: true,
    text: "Suscipit dictum fusce posuere ullamcorper integer sed. Praesent praesent montes, nisi, et elementum urna.",
  },
  {
    id: 6,
    owner: false,
    text: "Sed nisl, ullamcorper amet molestie massa, accumsan.",
  },
  {
    id: 7,
    owner: true,
    text: "Consectetur leo lorem facilisis urna consectetur tellus. Et, porttitor eget suspendisse arcu sem commodo.",
  },
  {
    id: 8,
    owner: true,
    text: "Faucibus mollis porttitor est in eleifend convallis.",
  },
  {
    id: 9,
    owner: false,
    text: "Nibh venenatis eleifend turpis arcu eget. Urna, viverra dignissim nulla aliquet suspendisse a.",
  },
];

const chatPreviews = [
  {
    chatId: "9575065e-659f-46a8-b021-20b284f4c406",
    newMsg: true,
    lastMsg: "Thank your for the offer but no thanks.",
    displayName: "Nele Langrock",
    photoUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2264&q=80",
  },
  {
    chatId: "4cc0d8da-004d-4348-8651-24da06414dbd",
    newMsg: true,
    lastMsg: "Bye bye.",
    displayName: "Adiana Hall",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    chatId: "96c9653b-c546-4207-91fc-3cbcfb297326",
    newMsg: false,
    lastMsg: "Hey, can we talk about your latest offer.",
    displayName: "Olaf Koch",
    photoUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2261&q=80",
  },
  {
    chatId: "e569a76d-c4b6-4f14-94fd-ed652a42eb47",
    newMsg: true,
    lastMsg: "Nice offer",
    displayName: "Belarin Paul",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
  },
  {
    chatId: "e7127111-348e-4909-aab6-c3ca70ed16a1",
    newMsg: false,
    lastMsg: "Lets meet in the middle!",
    displayName: "Richard Mitschel",
    photoUrl:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
];

const exampleOffers = [
  {
    name: "VW Golf",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "ec641c7b-5a7e-421d-ac5a-fa915c65cb54",
    location: {
      lat: 52.4199,
      lng: 13.29384,
      street: "Goerzallee",
      number: 156,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Goerzallee 156",
    },
    price: {
      day: 30,
      week: 250,
      month: 400,
    },
    calendar: {
      startDate: "13.03.2023",
      endDate: "23.03.2023",
    },
    carSpecs: {
      condition: "Very Good",
      transmission: "Manual",
      fuelType: "Gas",
      carType: "Sedan",
      milage: 30000,
      color: "Blue",
      trunkVolume: 4,
      seats: 5,
      smoking: false,
      eating: false,
    },
    ownerId: "85c48b9a-32f8-4279-9c89-3a459455d994",
    ratingId: "",
    status: "Active",
    liked: true,
    photoUrl: [
      "https://images.unsplash.com/photo-1666346167029-d8bf4466fab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      "https://images.unsplash.com/photo-1666346166820-67cc5ccdd678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      "https://images.unsplash.com/photo-1666346166850-e5ee1857ea18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1666346166835-a70595660aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      "https://images.unsplash.com/photo-1666346166849-8443c47f50fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    ],
  },
  {
    name: "Ford Focus",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "4469d428-3ee6-42a3-ad96-a5e42b481379",
    location: {
      lat: 52.4168112,
      lng: 13.2896103,
      street: "Goerzallee",
      number: 189,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Goerzallee 189",
    },
    price: {
      day: 50,
      week: 300,
      month: 700,
    },
    calendar: {
      startDate: "15.03.2023",
      endDate: "20.03.2023",
    },
    carSpecs: {
      condition: "Very Good",
      transmission: "Manual",
      fuelType: "Gas",
      carType: "Sedan",
      milage: 45400,
      color: "White",
      trunkVolume: 4,
      seats: 5,
      smoking: true,
      eating: false,
    },
    ownerId: "ae5cdceb-1e5b-4b84-9bab-bab3d55a1abb",
    ratingId: "",
    status: "Reserved",
    liked: false,
    photoUrl: [
      "https://images.unsplash.com/photo-1610535650161-21e7f7ffea31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
      "https://images.unsplash.com/photo-1610535650181-314c70b5dfe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
      "https://images.unsplash.com/photo-1610535650139-67895955fe3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
      "https://images.unsplash.com/photo-1610535650136-df6ca3e6f796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
      "https://images.unsplash.com/photo-1610535650134-781e16f4648f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
    ],
  },
  {
    name: "VW Tiguan",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "a36e91f5-c9f3-4bc1-9b26-08099879303c",
    location: {
      lat: 52.4182,
      lng: 13.29016,
      street: "Kolonie Parkkol. Amselweg",
      number: 935,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Kolonie Parkkol. Amselweg 935",
    },
    price: {
      day: 35,
      week: 260,
      month: 400,
    },
    calendar: {
      startDate: "01.03.2023",
      endDate: "13.05.2023",
    },
    carSpecs: {
      condition: "Good",
      transmission: "Automatic",
      fuelType: "Electro",
      carType: "Sedan",
      milage: 45000,
      color: "Black",
      trunkVolume: 4,
      seats: 5,
      smoking: true,
      eating: true,
    },
    ownerId: "505616ab-eb1e-45d3-b83f-13bcc11e94c4",
    ratingId: "",
    status: "Active",
    liked: true,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
  {
    name: "Skoda Octavia",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "cc4ae289-e33b-4db7-b0a2-1760bf586121",
    location: {
      lat: 52.418,
      lng: 13.28999,
      street: "Lichterfelder Weg",
      number: 932,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Lichterfelder Weg 932",
    },
    price: {
      day: 120,
      week: 300,
      month: 720,
    },
    calendar: {
      startDate: "26.03.2023",
      endDate: "15.04.2023",
    },
    carSpecs: {
      condition: "Reliable",
      transmission: "Manual",
      fuelType: "Gas",
      carType: "Sedan",
      milage: 120000,
      color: "Green",
      trunkVolume: 6,
      seats: 5,
      smoking: true,
      eating: true,
    },
    ownerId: "56891419-1d0c-4244-b793-124af05b6517",
    ratingId: "",
    status: "Active",
    liked: false,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
  {
    name: "VW Passat",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "6752948f-37fe-4913-8f9a-be23e01bcbc0",
    location: {
      lat: 52.4184817,
      lng: 13.2857082,
      street: "Billy-Wilder-Promenade",
      number: 42,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Billy-Wilder-Promenade 42",
    },
    price: {
      day: 60,
      week: 320,
      month: 760,
    },
    calendar: {
      startDate: "10.06.2023",
      endDate: "29.06.2023",
    },
    carSpecs: {
      condition: "Very Good",
      transmission: "Manual",
      fuelType: "Gas",
      carType: "Sedan",
      milage: 80000,
      color: "Blue",
      trunkVolume: 4,
      seats: 6,
      smoking: true,
      eating: false,
    },
    ownerId: "ae5cdceb-1e5b-4b84-9bab-bab3d55a1abb",
    ratingId: "",
    status: "Active",
    liked: true,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
  {
    name: "Opel Corsea",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "85b76ab2-3cb1-4da2-9a3a-e712b4c4ef73",
    location: {
      lat: 52.41673,
      lng: 13.28629,
      street: "Am Stichkanal",
      number: 1,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Am Stichkanal 1",
    },
    price: {
      day: 60,
      week: 240,
      month: 540,
    },
    calendar: {
      startDate: "13.03.2023",
      endDate: "13.04.2023",
    },
    carSpecs: {
      condition: "Fair",
      transmission: "Manual",
      fuelType: "Gas",
      carType: "Hatchback",
      milage: 230100,
      color: "White",
      trunkVolume: 4,
      seats: 5,
      smoking: true,
      eating: false,
    },
    ownerId: "56891419-1d0c-4244-b793-124af05b6517",
    ratingId: "",
    status: "Active",
    liked: true,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
  {
    name: "VW T-Roc",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "da0d15a5-a42d-49c1-8694-0ce3078462ee",
    location: {
      lat: 52.520008,
      lng: 13.404954,
      street: "Harry-S.-Truman-Allee",
      number: 27,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Harry-S.-Truman-Allee 27",
    },
    price: {
      day: 34,
      week: 160,
      month: 420,
    },
    calendar: {
      startDate: "18.02.2023",
      endDate: "23.03.2023",
    },
    carSpecs: {
      condition: "Very Good",
      transmission: "Manual",
      fuelType: "Diesel",
      carType: "Hatchback",
      milage: 135000,
      color: "White",
      trunkVolume: 4,
      seats: 5,
      smoking: true,
      eating: false,
    },
    ownerId: "505616ab-eb1e-45d3-b83f-13bcc11e94c4",
    ratingId: "",
    status: "Active",
    liked: true,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
  {
    name: "BMW 3-Series",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "506a01d3-322b-47f0-9e7e-62250e882776",
    location: {
      lat: 52.41904,
      lng: 13.29453,
      street: "Drei-Zinnen-Weg",
      number: 5,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Drei-Zinnen-Weg 5",
    },
    price: {
      day: 70,
      week: 200,
      month: 400,
    },
    calendar: {
      startDate: "03.03.2023",
      endDate: "18.03.2023",
    },
    carSpecs: {
      condition: "Very Good",
      transmission: "Diesel",
      fuelType: "Gas",
      carType: "Sport",
      milage: 145200,
      color: "black",
      trunkVolume: 3,
      seats: 5,
      smoking: false,
      eating: false,
    },
    ownerId: "85c48b9a-32f8-4279-9c89-3a459455d994",
    ratingId: "",
    status: "Active",
    liked: false,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
  {
    name: "VW Polo",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "18c430f6-c1ba-466e-8397-53cbd3608293",
    location: {
      lat: 52.41914,
      lng: 13.29396,
      street: "Lichterfelder Weg",
      number: 3,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Lichterfelder Weg 3",
    },
    price: {
      day: 100,
      week: 300,
      month: 700,
    },
    calendar: {
      startDate: "01.06.2023",
      endDate: "28.06.2023",
    },
    carSpecs: {
      condition: "Fair",
      transmission: "Automatic",
      fuelType: "Electro",
      carType: "Coupe",
      milage: 63000,
      color: "white",
      trunkVolume: 4,
      seats: 6,
      smoking: true,
      eating: false,
    },
    ownerId: "ae5cdceb-1e5b-4b84-9bab-bab3d55a1abb",
    ratingId: "",
    status: "Active",
    liked: false,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
  {
    name: "BMW Mini",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "154eb406-9729-4435-902e-25df689762f0",
    location: {
      lat: 52.4157479,
      lng: 13.2866306,
      street: "Am Stichkanal",
      number: 10,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Am Stichkanal 10",
    },
    price: {
      day: 25,
      week: 100,
      month: 300,
    },
    calendar: {
      startDate: "04.04.2023",
      endDate: "04.10.2023",
    },
    carSpecs: {
      condition: "Very Good",
      transmission: "Automatic",
      fuelType: "Electro",
      carType: "Coupe",
      milage: 13000,
      color: "black",
      trunkVolume: 3,
      seats: 2,
      smoking: true,
      eating: true,
    },
    ownerId: "56891419-1d0c-4244-b793-124af05b6517",
    ratingId: "",
    status: "Active",
    liked: true,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
  {
    name: "Toyota Yaris",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "0c4441e3-e6e1-4010-a319-4946349df0f2",
    location: {
      lat: 52.4204147,
      lng: 13.2839802,
      street: "Harry-S.-Truman-Allee",
      number: 3,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: "Harry-S.-Truman-Allee 3",
    },
    price: {
      day: 30,
      week: 140,
      month: 380,
    },
    calendar: {
      startDate: "12.03.2023",
      endDate: "20.03.2023",
    },
    carSpecs: {
      condition: "Fair",
      transmission: "Manual",
      fuelType: "Diesel",
      carType: "Minivan",
      milage: 44000,
      color: "white",
      trunkVolume: 3,
      seats: 5,
      smoking: true,
      eating: true,
    },
    ownerId: "85c48b9a-32f8-4279-9c89-3a459455d994",
    ratingId: "",
    status: "Active",
    liked: false,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
  {
    name: "Renault Clio",
    extraInfo:
      "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
    offerId: "58f2899f-85d3-46fa-a0d3-99a0eae2f07d",
    location: {
      lat: 52.4206,
      lng: 13.29398,
      street: " Kolonie Parkkol. Elsternweg",
      number: 797,
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
      formatted: " Kolonie Parkkol. Elsternweg 797",
    },
    price: {
      day: 38,
      week: 110,
      month: 200,
    },
    calendar: {
      startDate: "24.03.2023",
      endDate: "24.04.2023",
    },
    carSpecs: {
      condition: "Very Good",
      transmission: "Manual",
      fuelType: "Gas",
      carType: "Sedan",
      milage: 355530,
      color: "Green",
      trunkVolume: 4,
      seats: 5,
      smoking: true,
      eating: true,
    },
    ownerId: "ae5cdceb-1e5b-4b84-9bab-bab3d55a1abb",
    ratingId: "",
    status: "Active",
    liked: false,
    photoUrl: [
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
      "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    ],
  },
];

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
    {
      name: "Most Viewed",
      linkTo: "mostViewed",
    },
    {
      name: "About",
      linkTo: "about",
    },
  ];

const firestoreFormattedOffer = {
  name: "VW Golf",
  extraInfo:
    "Blandit facilisis viverra etiam ut ultrices feugiat commodo amet ullamcorper. Nulla volutpat at praesent faucibus. Risus pulvinar purus a id urna sed risus.",
  offerId: "ec641c7b-5a7e-421d-ac5a-fa915c65cb54",
  location: {
    lat: 52.4199,
    lng: 13.29384,
    street: "Goerzallee",
    houseNumber: 156,
    city: "Berlin",
    country: "Germany",
    formatted: "Goerzallee 156",
  },
  price: {
    day: 30,
    week: 250,
    month: 400,
  },
  calendar: {
    startDate: "13.03.2023",
    endDate: "23.03.2023",
  },
  carSpecs: {
    condition: {
      name: "Condition",
      value: "Very Good",
    },
    transmission: {
      name: "Transmission",
      value: "Manual",
    },
    fuelType: {
      name: "Fuel Type",
      value: "Gas",
    },
    carType: {
      name: "Car Type",
      value: "Sedan",
    },
    milage: {
      name: "Milage",
      value: 30000,
    },
    color: {
      name: "Color",
      value: "Blue",
    },
    trunkVolume: {
      name: "Trunk Volume",
      value: 4,
    },
    seats: {
      name: "Seats",
      value: 5,
    },
    smoking: {
      name: "Smoking",
      value: "No",
    },
    eating: {
      name: "Eating",
      value: "No",
    },
  },
  ownerId: "85c48b9a-32f8-4279-9c89-3a459455d994",
  ratingId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  status: "Active",
  photoUrl: [
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fyee.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-8b6XX81mj9s-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-JcGztSmOrzc-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-OiHz7yru4o0-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
    "https://firebasestorage.googleapis.com/v0/b/meggsrental.appspot.com/o/offers%2Fec641c7b-5a7e-421d-ac5a-fa915c65cb54%2Fmartin-katler-CMj1OjV7-gA-unsplash.webp?alt=media&token=587f6df7-dce3-46fb-9273-baa9196ee1dd",
  ],
};

const ExampleData = () => {
  return {
    carSpecData,
    previewSpecs,
    filterSelects,
    filterTypes,
    userProfileBig,
    reviews,
    reviewRating,
    carTypeSelect,
    transmissionSelect,
    colorSelect,
    fuelSelect,
    trunkSelect,
    seatSelect,
    reviewId,
    offerCard,
    genderSelect,
    eatingSelect,
    smokingSelect,
    signUpRounds,
    forgotPasswordRounds,
    citiesAutocomplete,
    messages,
    chatPreviews,
    exampleOffers,
    navbarLinks,
    firestoreFormattedOffer,
  };
};


export default ExampleData;
