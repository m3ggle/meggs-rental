import React, { useEffect, useState } from "react";
import { useGetOffersByFilterFavorites } from "../../api/supabase/useGetOffersByFilterFavorites";
import CatalogWrapper from "../../components/wrapper/CatalogWrapper";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useHandleCatalogFilter } from "../explore/catalog/hooks/useHandleCatalogFilter";

const Favorites = () => {
  const { searchParams } = useUrlManipulation();
  const { handleCatalogFilter } = useHandleCatalogFilter();

  const [filter, setFilter] = useState({});
  useEffect(() => {
    setFilter(handleCatalogFilter());
  }, [searchParams, setFilter, handleCatalogFilter]);

  const { offers } = useGetOffersByFilterFavorites(filter);

  return (
    <PageAuthChecker>
      <CatalogWrapper offerList={offers} />
    </PageAuthChecker>
  );
};

export default Favorites;
