export const FooterContent = () => {
  const contentFooterMainSecond = [
    [
      {
        content: "Contact",
        type: "title",
        linkTo: false,
      },
      {
        content: "E-Mail: megglebande@web.de",
        type: "text",
        linkTo: false,
      },
      {
        content: "Address: Berlin, Germany",
        type: "text",
        linkTo: false,
      },
    ],
    [
      {
        content: "Authentication",
        type: "title",
        linkTo: false,
      },
      {
        content: "Sign In",
        type: "text",
        linkTo: "/sign-in",
      },
      {
        content: "Sign Up",
        type: "text",
        linkTo: "/sign-up",
      },
      {
        content: "Forgot Password",
        type: "text",
        linkTo: "/forgot-password",
      },
    ],
  ];

  const contentFooterMainThird = [
    [
      {
        content: "Support/Legal",
        type: "title",
        linkTo: false,
      },
      {
        content: "Help",
        type: "text",
        linkTo: "/help",
      },
      {
        content: "Terms",
        type: "text",
        linkTo: "/terms-of-service",
      },
      {
        content: "Privacy",
        type: "text",
        linkTo: "/privacy-policy",
      },
      {
        content: "Career",
        type: "text",
        linkTo: false,
      },
      {
        content: "Security",
        type: "text",
        linkTo: false,
      },
    ],
  ];

  return { contentFooterMainSecond, contentFooterMainThird };
};
