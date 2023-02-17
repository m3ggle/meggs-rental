import { useState } from "react";
import { useQuery } from "react-query";
import { toastNotify } from "../../components/toastNotify/toastNotify";
import supabase from "../../config/supabaseClient";

export const useGetOfferReviewSectionFull = (offerId) => {
  const { notifyStandard } = toastNotify();

  const [summary, setSummary] = useState({});
  const [reviews, setReviews] = useState([]);

  const getReviewSection = async () => {
    if (offerId !== null) {
      return Promise.all([
        supabase.rpc("get_offer_rs_summary", {
          oid: offerId,
        }),
        supabase.rpc("get_offer_rs_reviews", {
          oid: offerId,
        }),
      ]);
    }
    return { error: null, data: null };
  };

  const onSuccess = (response) => {
    const summary = response[0];
    const reviews = response[1];
    const { error: summaryError, data: summaryData } = summary;
    const { error: reviewsError, data: reviewsData } = reviews;

    if (summaryError !== null && reviewsError !== null) {
      notifyStandard({
        information: {
          type: "warning",
          content: "Could not get the review section to the offer.",
        },
        id: "get_review_section",
      });
      return;
    }
    setSummary(summaryData);
    setReviews(reviewsData);
  };

  const { data, isLoading } = useQuery(
    ["get_review_section", offerId],
    getReviewSection,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
      onSuccess,
    }
  );

  return { summary, reviews, isLoading };
};
