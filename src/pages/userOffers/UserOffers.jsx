import React, { useEffect, useState } from "react";
import { useGetUserOffersByFilter } from "../../api/supabase/useGetUserOffersByFilter";
import CatalogWrapper from "../../components/wrapper/CatalogWrapper";
import PageAuthChecker from "../../components/wrapper/PageAuthChecker";
import { useUrlManipulation } from "../../hooks/urlManipulation/useUrlManipulation";
import { useHandleCatalogFilter } from "../explore/catalog/hooks/useHandleCatalogFilter";

const UserOffers = () => {
  const { searchParams } = useUrlManipulation();
  const { handleCatalogFilter } = useHandleCatalogFilter();

  const [filter, setFilter] = useState({});
  useEffect(() => {
    setFilter(handleCatalogFilter());
  }, [searchParams, setFilter, handleCatalogFilter]);

  const { userOffers } = useGetUserOffersByFilter(filter);

  return (
    <PageAuthChecker>
      <CatalogWrapper offerList={userOffers} />;
    </PageAuthChecker>
  );
};

export default UserOffers;
