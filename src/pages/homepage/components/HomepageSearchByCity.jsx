import React from "react";
import Btn from "../../../components/common/Btn";

const HomepageSearchByCity = () => {
  const cities = [
    {
      cityName: "Dresden",
      photoUrl:
        "https://images.unsplash.com/photo-1628683332372-baf5d6a35c5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      linkTo: "",
    },
    {
      cityName: "Berlin",
      photoUrl:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      linkTo: "",
    },
    {
      cityName: "Hamburg",
      photoUrl:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      linkTo: "",
    },
    {
      cityName: "Cologne",
      photoUrl:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      linkTo: "",
    },
    {
      cityName: "Munich",
      photoUrl:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      linkTo: "",
    },
  ];

  const handleButtonClick = () => {};

  const testDrive = (city) => {
    console.log(city);
  };

  return (
    <div className="flex w-full gap-x-3 bg-white px-14 py-[100px]">
      <div className="h-[720px] min-w-[720px] rounded-[60px] bg-blue-200" />
      <div className="flex h-[720px] w-full justify-center">
        <div className="flex w-[448px] flex-col gap-y-6 py-6">
          <h2 className="text-5xl font-semibold text-lmGrey800 drop-shadow">
            Search by City
          </h2>
          <div className="flex h-full flex-grow flex-col gap-y-3 overflow-scroll">
            {cities.map((city) => (
              <div
                onClick={() => testDrive(city.cityName)}
                className="group relative h-[140px] min-h-[140px] w-full rounded-xl bg-blue-200 bg-cover bg-center duration-300 hover:min-h-[180px]"
                style={{
                  backgroundImage: `url(${city.photoUrl})`,
                }}
              >
                <span className="absolute bottom-4 left-6 text-2xl text-white duration-300 group-hover:bottom-6">
                  {city.cityName}
                </span>
              </div>
            ))}
          </div>
          <div className="w-fit">
            <Btn
              type="button"
              uiType="primary"
              title="Open the Map"
              onClick={handleButtonClick}
              icon="fa-solid fa-chevron-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSearchByCity;
