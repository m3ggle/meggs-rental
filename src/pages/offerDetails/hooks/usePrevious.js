import { useState } from "react";

export const usePrevious = (state) => {
  let [tuple, setTuple] = useState([state, null]);
  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }
  return tuple[0];
};
