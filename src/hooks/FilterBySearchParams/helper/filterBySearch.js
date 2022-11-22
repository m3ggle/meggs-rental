export const filterBySearch = (offerList, desiredValue) =>
  offerList.filter((offer) => offer.name.includes(desiredValue));
