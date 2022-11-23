import ExampleData from "../ExampleData";

export const useGetOffer = (localStorageName = "") => {
  const { exampleOffers } = ExampleData();

  const checkLocalStorage = () => localStorage.getItem(localStorageName);

  const checkExampleData = (offerId) => {
    const localResult = exampleOffers.filter(
      (offer) => offer.offerId === offerId
    );
    return localResult[0];
  };

  const checkFirestore = () => {return undefined};

  const getOffer = (offerId) => {
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
  };

  return { getOffer };
};
