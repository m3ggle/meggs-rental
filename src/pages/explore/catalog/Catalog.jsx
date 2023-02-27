import React, { useEffect, useState } from "react";
import { useGetOffersByFilter } from "../../../api/supabase/useGetOffersByFilter";
import CatalogWrapper from "../../../components/wrapper/CatalogWrapper";
import { useUserContext } from "../../../context/user/userContext";
import { useUrlManipulation } from "../../../hooks/urlManipulation/useUrlManipulation";
import { useHandleCatalogFilter } from "./hooks/useHandleCatalogFilter";

const Catalog = () => {
  const { searchParams } = useUrlManipulation();
  const { handleCatalogFilter } = useHandleCatalogFilter();

  const [filter, setFilter] = useState({});
  useEffect(() => {
    setFilter(handleCatalogFilter());
  }, [searchParams, setFilter, handleCatalogFilter]);

  const { offers} = useGetOffersByFilter(filter)

  return (
    <CatalogWrapper
      offerList={offers}
    />
  );
};

export default Catalog;
