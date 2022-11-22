export const cleanUpFilterData = (data) => {
  let allActives = {};

  for (const [key, value] of Object.entries(data)) {
    if (activeCondition(value)) {
      allActives[key] = value.replace(/\s+/g, " ").trim();
    }
  }
  console.log(allActives)
  return allActives;
};

const activeCondition = (value) => {
  return (
    value !== undefined &&
    value !== "" &&
    value.trim(" ").length > 0 &&
    value !== "undefined"
  );
};
