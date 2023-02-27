import React, { useEffect, useState } from "react";
import { useGetOffersByFilter } from "../../../api/supabase/useGetOffersByFilter";
import CatalogWrapper from "../../../components/wrapper/CatalogWrapper";
import { useUserContext } from "../../../context/user/userContext";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";
import { useHandleCatalogFilter } from "./hooks/useHandleCatalogFilter";

const Catalog = () => {
  // const { exampleOffers } = ExampleData();
  const exampleOffers = [];
  const { userData } = useUserContext();

  const { searchParams } = useUrlManipulation();
  const { handleCatalogFilter } = useHandleCatalogFilter();

  const [filter, setFilter] = useState({});
  useEffect(() => {
    console.log("gets called please in the initial")
    setFilter(handleCatalogFilter());
  }, [searchParams, setFilter, handleCatalogFilter]);

  const { offers, isLoading} = useGetOffersByFilter(filter)
  console.log(offers)

  // need to edit city, split it up 
  return (
    <CatalogWrapper
      offerList={offers}
      preferredCity={userData?.preferredCity}
    />
  );
};

export default Catalog;
