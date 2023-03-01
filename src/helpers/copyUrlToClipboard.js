import { toastNotify } from "../components/toastNotify/toastNotify";

const { notifyStandard } = toastNotify();

export const copyUrlToClipboard = ({
  url = "",
  successMessage = "Url was copied.",
  errorMessage = "Failed to copy the Url.",
}) => {
  navigator.clipboard
    .writeText(url)
    .then(() =>
      notifyStandard({
        information: {
          type: "success",
          content: successMessage,
        },
        id: "url copy",
      })
    )
    .catch((error) => {
      notifyStandard({
        information: {
          type: "error",
          content: errorMessage,
        },
        id: "url copy",
      });
      console.error("Failed to copy link: ", error);
    });
};
