import { useState } from "react";
import { usePrevious } from "./usePrevious";

export const useImageCarouselHelper = () => {
  let [count, setCount] = useState(0);
  let previous = usePrevious(count);
  let direction = count > previous ? 1 : -1;

  const handleContinue = (imageArray) => {
    imageArray.length - 1 > count
      ? setCount((prevState) => prevState + 1)
      : setCount(0);
  };

  const handlePrevious = (imageArray) => {
    0 < count
      ? setCount((prevState) => prevState - 1)
      : setCount(imageArray.length - 1);
  };
    
    return { count, direction, handleContinue, handlePrevious };
};
