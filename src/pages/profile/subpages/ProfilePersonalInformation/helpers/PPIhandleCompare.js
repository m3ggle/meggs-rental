import { sortObject } from "./sortObject";
import { trimObject } from "./trimObject";

export const handleCompare = (firstObj, secondObj) => {
  // trim down the second obj to the level of first obj
  firstObj = trimObject(firstObj, secondObj);
  secondObj = trimObject(secondObj, firstObj);

  // sort objects
  firstObj = sortObject(firstObj);
  secondObj = sortObject(secondObj);

  // compare and return
  const result = JSON.stringify(firstObj) === JSON.stringify(secondObj);
  return result;
};
