export const undefinedToNull = (obj) => {
  let finishedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      finishedObj[key] = value;
    }
  }
  return finishedObj;
};
