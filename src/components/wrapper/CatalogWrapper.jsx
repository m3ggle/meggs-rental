import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFilterBySearchParams } from "../../hooks/FilterBySearchParams/useFilterBySearchParams";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import CatalogList from "../../pages/explore/catalog/components/CatalogList";
import CatalogLayout from "../layouts/CatalogLayout";

const CatalogWrapper = ({ offerList, preferredCity }) => {
  // const [filteredOffers, setFilteredOffers] = useState(offerList);
  // let [searchParams] = useSearchParams();
  // const { filterBySearchParams } = useFilterBySearchParams();

  // // Todo: React.Callback for "filterBySearchParams", after that, add to depArray
  // useEffect(() => {
  //   offerList && setFilteredOffers(filterBySearchParams(offerList));
  // }, [searchParams, offerList, setFilteredOffers]);

  // // test
  // const { getAllParams } = useUrlManipulation();

  // const prepOperation = (key) => {
  //   if (key.includes("start")) {
  //     return ">=";
  //   }
  //   if (key.includes("end")) {
  //     return "<=";
  //   }
  //   return "==";
  // };

  // const prepFieldName = (key) => {
  //   if (key.includes("startDate")) {
  //     return "calendar.startDate";
  //   }
  //   if (key.includes("priceWeek")) {
  //     return "price.week";
  //   }
  //   if (key.includes("priceWeek")) {
  //     return "price.week";
  //   }
  //   if (key.includes("priceWeek")) {
  //     return "price.week";
  //   }
  //   if (key.includes("priceWeek")) {
  //     return "price.week";
  //   }
  //   if (key.includes("priceWeek")) {
  //     return "price.week";
  //   }
  // };

  // const getTestDrive = () => {
  //   // prep
  //   let params = getAllParams();
  //   let queries = [];

  //   for (let [key, value] of Object.entries(params)) {
  //     if (key === "search") {
  //       return;
  //     }

  //     queries.push({
  //       fieldName: prepFieldName(key),
  //       operation: prepOperation(key),
  //       value
  //     });
  //   }

  //   console.log(queries);

  //   // call
  // };

  // useEffect(() => {
  //   getTestDrive();
  // }, []);

  // const { data, isLoading } = useQuery([], getTestDrive);

  return (
    <CatalogLayout>
      <CatalogList offerList={offerList} />
    </CatalogLayout>
  );
};

export default CatalogWrapper;
