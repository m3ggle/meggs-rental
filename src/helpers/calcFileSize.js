export const calcFileSize = (arr = []) => {
  let size = 0;
  arr.forEach((file) => {
    console.log((file.size / 1000000).toFixed(2) + " MB");
    size += file.size;
  });
  return size;
};
