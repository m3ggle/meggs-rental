export const filterByCarSpec = (offerList, desiredValue, carSpec) => {
  if (carSpec === "seats" || carSpec === "trunkVolume") {
    const numberOfSeats = parseInt(desiredValue.split(" ")[0]);
    return offerList.filter(
      (offer) => numberOfSeats <= offer.carSpecs[carSpec]
    );
  } else if (carSpec === "smoking" || carSpec === "eating") {
    return offerList.filter(
      (offer) => desiredValue === (offer.carSpecs[carSpec] ? "Yes" : "No")
    );
  } else {
    return offerList.filter(
      (offer) => desiredValue === offer.carSpecs[carSpec]
    );
  }
};
