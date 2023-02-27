import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetOffersByFilter = (filter = {}) => {
  const getOfferCards = async () => {
    console.log(filter)
    if (Object.keys(filter).length > 0) {
      console.log("in here")
      return supabase.rpc("get_offers_by_filter", {
        // amount_seats,
        // brand,
        // color,
        // day_end_price,
        // day_start_price,
        // east,
        // eating_allowed,
        // end_date,
        // fuel_type,
        // limit_,
        // month_end_price,
        // month_start_price,
        // north,
        // offer_name,
        // offset_,
        // smoking_allowed,
        // south,
        // start_date,
        // transmission,
        // trunk_volume,
        // week_end_price,
        // week_start_price,
        // west,
          ...filter
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_offer_cards", filter],
    getOfferCards,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  return { offers: data?.data ?? [], isLoading, error: data?.error };
};
