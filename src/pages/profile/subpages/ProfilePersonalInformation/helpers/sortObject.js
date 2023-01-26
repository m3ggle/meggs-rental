export const sortObject = (obj) => {
  const sorted = Object.keys(obj)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: obj[key],
      }),
      {}
    );

  return sorted;
};
