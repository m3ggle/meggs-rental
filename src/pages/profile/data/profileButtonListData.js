export const profileButtonListData = [
  {
    sectionTitle: "Profile",
    buttons: [
      {
        btnTitle: "Show Profile",
        icon: "fa-solid fa-eye",
        link: "userModal",
        id: "e995894b-b383-4688-a3fa-88188e777897",
      },
      {
        btnTitle: "Personal Information",
        icon: "fa-solid fa-user",
        link: "/profile/account",
        id: "842c70a1-cac2-496a-8cd9-242673fb488f",
      },
      {
        btnTitle: "Update E-Mail",
        icon: "fa-solid fa-clock-rotate-left", //fa-solid fa-at
        link: "/update-email",
        id: "8f13a821-4ee7-4e74-9e78-2dd05717d450",
      },
      {
        btnTitle: "Update Password",
        icon: "fa-solid fa-clock-rotate-left", //fa-solid fa-unlock
        link: "/update-password",
        id: "0f2b9b27-ed81-4f7b-8a40-86d89b375e7d",
      },
      {
        btnTitle: "Your Offers",
        icon: "fa-solid fa-user",
        link: "/users-offers?currentUserId",
        id: "998586a5-a3d7-443d-83bd-8456c4616c2d",
      },
      {
        btnTitle: "Reviews",
        icon: "fa-solid fa-clock-rotate-left", //fa-solid fa-star
        link: "/reviews/user?currentUserId",
        id: "938d1458-3a53-4228-b24a-f03f00ecb0ed",
      },
      {
        btnTitle: "Notification",
        icon: "fa-solid fa-clock-rotate-left", //fa-solid fa-bell
        link: "/profile/notification",
        id: "5c3c5749-d37c-4e4e-88c2-2071a0001d07",
      },
      {
        btnTitle: "Payments",
        icon: "fa-solid fa-clock-rotate-left", //fa-solid fa-credit-card
        link: "/profile/payments",
        id: "1adf493b-c208-4d6f-b652-18d2ae24270f",
      },
    ],
  },
  {
    sectionTitle: "Helpful",
    buttons: [
      {
        btnTitle: "Help",
        icon: "fa-solid fa-clock-rotate-left", //fa-solid fa-handshake-angle
        link: "/help",
        id: "14edb648-4594-448b-bd3f-35173f244e4e",
      },
      {
        btnTitle: "Tips and Tricks",
        icon: "fa-solid fa-clock-rotate-left", //fa-solid fa-wand-magic-sparkles
        link: "/tips-and-tricks",
        id: "c5a03b34-21e2-4dfe-97f0-54b1ffa11416",
      },
    ],
  },
  {
    sectionTitle: "Legal",
    buttons: [
      {
        btnTitle: "Terms of Service",
        icon: "fa-solid fa-clock-rotate-left", //fa-solid fa-section
        link: "/terms-of-service",
        id: "ec1cd5c7-9242-4a14-ba46-152ef6be9471",
      },
      {
        btnTitle: "Privacy Policy",
        icon: "fa-solid fa-clock-rotate-left", //fa-solid fa-user-shield
        link: "/privacy-policy",
        id: "f2f21e9e-2bf7-4d2e-8d02-185d141f0893",
      },
    ],
  },
  {
    sectionTitle: "Sign-out",
    buttons: [
      {
        btnTitle: "Sign Out",
        icon: "fa-solid fa-right-from-bracket",
        link: "signOutModal",
        id: "37b99301-3294-455b-919e-ddc92c81dedb",
      },
    ],
  },
];
