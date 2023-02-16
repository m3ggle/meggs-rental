export const checkCompleteness = ({ formData, userId }) => {
  if (
    userId === undefined ||
    userId === null ||
    formData.amountSeats === undefined ||
    formData.amountSeats === null ||
    formData.category === undefined ||
    formData.category === null ||
    formData.brandName === undefined ||
    formData.brandName === null ||
    formData.eatingAllowed === undefined ||
    formData.eatingAllowed === null ||
    formData.fuelType === undefined ||
    formData.fuelType === null ||
    formData.kilometer === undefined ||
    formData.kilometer === null ||
    formData.offerName === undefined ||
    formData.offerName === null ||
    formData.vehicleName === undefined ||
    formData.vehicleName === null ||
    // formData.pictureUrls.length === 0 ||
    formData.color === undefined ||
    formData.color === null ||
    formData.monthPrice === undefined ||
    formData.monthPrice === null ||
    formData.weekPrice === undefined ||
    formData.weekPrice === null ||
    formData.smokingAllowed === undefined ||
    formData.smokingAllowed === null ||
    formData.transmission === undefined ||
    formData.transmission === null ||
    formData.trunkVolume === undefined ||
    formData.trunkVolume === null ||
    formData.vehicleCondition === undefined ||
    formData.vehicleCondition === null ||
    formData.offerLocation.name === undefined ||
    formData.offerLocation.name === null ||
    formData.offerLocation.extraInfo.text.city === undefined ||
    formData.offerLocation.extraInfo.text.city === null ||
    formData.offerLocation.extraInfo.text.province === undefined ||
    formData.offerLocation.extraInfo.text.province === null ||
    formData.offerLocation.extraInfo.text.street === undefined ||
    formData.offerLocation.extraInfo.text.street === null ||
    formData.offerLocation.extraInfo.text.country === undefined ||
    formData.offerLocation.extraInfo.text.country === null ||
    formData.offerLocation.extraInfo.center.lat === undefined ||
    formData.offerLocation.extraInfo.center.lat === null ||
    formData.offerLocation.extraInfo.center.lng === undefined ||
    formData.offerLocation.extraInfo.center.lng === null
  ) {
    return true;
  }
  return false;
};
