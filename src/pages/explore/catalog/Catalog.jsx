import React, { useEffect, useState } from "react";
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
    setFilter(handleCatalogFilter());
  }, [searchParams]);

  // const { offers, isLoading} = useGetOffersByFilter(filter)

  // need to edit city, split it up 
  return (
    <CatalogWrapper
      offerList={exampleOffers}
      preferredCity={userData?.preferredCity}
    />
  );
};

export default Catalog;
