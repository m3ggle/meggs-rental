import { useState } from "react";

export const useSignStateData = () => {
  const [dataCollection, setDataCollection] = useState({});

  const storeDataInState = (data, localStorageData) => {
    let currentData = localStorageData ?? dataCollection;
    Object.entries(data).map((item) => {
      currentData[item[0]] = item[1];
    });
    setDataCollection({ ...currentData });
    return currentData;
  };

  return { dataCollection, storeDataInState};
};
