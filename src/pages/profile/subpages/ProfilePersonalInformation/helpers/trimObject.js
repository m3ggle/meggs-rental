/*
initialObj = {a: 1, b: 2, c: 3}
toObj = {c: 4}
returns initialObj trimmed down to the keys of toObj 
=> initialObj = {c: 3}
*/
export const trimObject = (biggerObj, smallerObj) => {
  Object.keys(biggerObj).forEach((key) => {
    if (!Object.keys(smallerObj).includes(key)) {
      delete biggerObj[key];
    }
  });

  return biggerObj;
};
