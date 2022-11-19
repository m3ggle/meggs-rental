export const filterByEndPrice = (offerList, desiredValue, duration) =>
  offerList.filter((offer) => desiredValue >= offer.price[duration]);
