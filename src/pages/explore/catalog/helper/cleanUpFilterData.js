export const cleanUpFilterData = (data) => {
  let allActives = {};
  Object.entries(data).map((item) => {
    if (item[1] !== undefined && item[1] !== "") {
      allActives[item[0]] = item[1];
    }
  });
  return allActives;
};
