import { useState } from "react";

export const useSignStateData = () => {
  const [dataCollection, setDataCollection] = useState({});

  const storeDataInState = (data) => {
    // let currentData = dataCollection;
    let currentData = JSON.parse(localStorage.getItem("uploadData")) ?? dataCollection;
    Object.entries(data).map((item) => {
      currentData[item[0]] = item[1];
    });
    console.log(currentData);
    setDataCollection({ ...currentData });
    localStorage.setItem("uploadData", JSON.stringify(currentData));
    return ;
  };

  return { dataCollection, storeDataInState};
};
