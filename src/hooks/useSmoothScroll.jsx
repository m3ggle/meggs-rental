export const smoothScroll = (linkTo) => {
  document.getElementById(linkTo).scrollIntoView({
    behavior: "smooth",
  });
};