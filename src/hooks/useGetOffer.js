import { useCallback } from "react";
import ExampleData from "../ExampleData";

export const useGetOffer = (localStorageName = "") => {
  const { exampleOffers } = ExampleData();

  const checkLocalStorage = useCallback(
    () => localStorage.getItem(localStorageName),
    [localStorageName]
  );

  const checkExampleData = useCallback((offerId) => {
    const localResult = exampleOffers.filter(
      (offer) => offer.offerId === offerId
    );
    return localResult[0];
  }, []);

  const checkFirestore = () => {return undefined};

  const getOffer = useCallback(
    (offerId) => {
      let result = checkLocalStorage();
      if (result) {
        return result;
      }

      result = checkExampleData(offerId);
      if (result) {
        return result;
      }

      result = checkFirestore();
      if (result) {
        return result;
      }

      return undefined;
    },
    [checkLocalStorage, checkExampleData]
  );

  return { getOffer };
};
