import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";

export const useGetOffersByFilter = (filter = {}) => {
  const getOfferCards = async () => {
    if (Object.keys(filter).length > 0) {
      return supabase.rpc("get_offers_by_filter", {
        // amount_seats_,
        // brand,
        // color_,
        // day_end_price_,
        // day_start_price_,
        // east_,
        // eating_allowed_,
        // end_date_,
        // fuel_type_,
        // limit_,
        // month_end_price_,
        // month_start_price_,
        // north_,
        // offer_name_,
        // offset_,
        // smoking_allowed_,
        // south_,
        // start_date_,
        // transmission_,
        // trunk_volume_,
        // week_end_price_,
        // week_start_price_,
        // west_,
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
