export const navigationTemplate = {
  isOpen: null,
  menu: [
    {
      navigateTo: null,
      text: null,
      icon: null,
    },
  ],
};

export const initialStateNavigation = {
  isOpen: false,
  menu: [
    {
      navigateTo: "/homepage",
      text: "Homepage",
      icon: "fa-solid fa-house",
    },
    {
      navigateTo: "/explore/map",
      text: "Explore Map",
      icon: "fa-solid fa-map",
    },
    {
      navigateTo: "/explore/catalog",
      text: "Explore Catalog",
      icon: "fa-solid fa-list",
    },
    {
      navigateTo: "/favorites",
      text: "Favorites",
      icon: "fa-solid fa-heart",
    },
    {
      navigateTo: "/user-offers",
      text: "Your Offers",
      icon: "fa-solid fa-file",
    },
    {
      navigateTo: "/upload",
      text: "Upload",
      icon: "fa-solid fa-plus",
    },
    {
      navigateTo: "/chat",
      text: "Chats",
      icon: "fa-solid fa-comments",
    },
    {
      navigateTo: "/profile",
      text: "Your Profile",
      icon: "fa-solid fa-user",
    },
  ],
};