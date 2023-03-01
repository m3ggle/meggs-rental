import { queryClient } from "../../../api/reactQuery/queryClient";

export const handleLikeSetQuery = ({ offerId, userId, isLiked }) => {
  queryClient.setQueryData(
    ["get_offer_details", offerId, userId],
    (cachedData) => {
      const offer_basics = cachedData.data.offer_basics;

      if (isLiked === offer_basics.is_liked) {
        return cachedData;
      }

      const updatedData = {
        ...cachedData,
        data: {
          ...cachedData.data,
          offer_basics: {
            ...offer_basics,
            is_liked: isLiked,
            like_count: isLiked
              ? offer_basics.like_count + 1
              : offer_basics.like_count - 1,
          },
        },
      };
      return updatedData;
    }
  );
};
