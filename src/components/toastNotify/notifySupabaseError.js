import { toastNotify } from "./toastNotify";

const { notifyStandard } = toastNotify();

export const notifySupabaseError = (error) => {
  console.log(error);

  notifyStandard({
    information: {
      type: "warning",
      content: error.message,
    },
    id: error.code,
  });
  // console.error(error);
};
