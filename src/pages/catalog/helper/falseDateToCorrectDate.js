export const falseDateToCorrectDate = (stringDate) => {
  const tempDate = stringDate.split(".");
  return `${tempDate[1]}/${tempDate[0]}/${tempDate[2]}`; // month/day/year
};
