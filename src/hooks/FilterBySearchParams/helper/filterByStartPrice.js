export const filterByStartPrice = (offerList, desiredValue, duration) =>
  offerList.filter((offer) => desiredValue <= offer.price[duration]);
