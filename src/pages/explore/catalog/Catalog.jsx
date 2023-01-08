import React from "react";
import { useQuery } from "react-query";
import CatalogWrapper from "../../../components/wrapper/CatalogWrapper";
import { useUserContext } from "../../../context/user/userContext";
import ExampleData from "../../../ExampleData";

const Catalog = () => {
  const { exampleOffers } = ExampleData();
  const { userData } = useUserContext();

  return <CatalogWrapper offerList={exampleOffers} preferredCity={userData?.preferredCity} />;
};

export default Catalog;
