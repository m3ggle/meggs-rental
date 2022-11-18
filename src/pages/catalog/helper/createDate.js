import { falseDateToCorrectDate } from "./falseDateToCorrectDate";

export const createDate = (stringDate) => {
  return new Date(falseDateToCorrectDate(stringDate));
};
