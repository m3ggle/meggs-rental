//https://youtu.be/ZetPurZgcSI
import React, { useEffect, useState } from "react";

const ProgressBar = ({ amount, finished }) => {
    const [amountArray, setAmountArray] = useState([]);
    
    useEffect(() => {
        const anArray = []
        for (let i = 0; i < amount; i++) {
            anArray.push(i);
        }
        setAmountArray(anArray)
    }, [amount])

  return (
    <div className="flex w-full items-center justify-center gap-x-2">
      {amountArray.map((item) => (
        <div
          key={item}
          className={`h-2 w-8 rounded-full ${
            item > finished
              ? "bg-lmGrey200 dark:bg-dmGrey600"
              : "bg-lmGrey400 dark:bg-dmGrey300"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
