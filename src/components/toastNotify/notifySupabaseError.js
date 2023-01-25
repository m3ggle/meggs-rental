import { toastNotify } from "./toastNotify";

const { notifyStandard } = toastNotify();

export const notifySupabaseError = (error) => {
  notifyStandard({
    information: {
      type: "warning",
      content: error.message,
    },
    id: error.message,
  });
  console.error(error);
};
