import supabase from "../../../config/supabaseClient";

export const uploadOfferData = async ({ formData, userId }) => {
  let { data: offerId, error } = await supabase.rpc("upload_offer", {
    amount_seats: +formData.amountSeats.split(" ")[0],
    brand_name: formData.brandName,
    category: formData.category,
    city: formData.offerLocation.extraInfo.text.city,
    color: formData.color,
    country: formData.offerLocation.extraInfo.text.country,
    day_price: +formData.dayPrice,
    eating_allowed: formData.eatingAllowed === "No" ? false : true,
    end_date: formData.endDate ?? null,
    formatted: formData.offerLocation.name,
    fuel_type: formData.fuelType,
    house_number: formData.offerLocation.extraInfo.text.houseNumber,
    kilometer: +formData.kilometer,
    latitude: formData.offerLocation.extraInfo.center.lat,
    longitude: formData.offerLocation.extraInfo.center.lng,
    month_price: +formData.monthPrice,
    offer_description: formData.offerDescription,
    offer_name: formData.offerName,
    picture_urls: null,
    plate_number: formData.plateNumber ?? null,
    province: formData.offerLocation.extraInfo.text.province,
    smoking_allowed: formData.smokingAllowed === "No" ? false : true,
    start_date: formData.startDate ?? null,
    street: formData.offerLocation.extraInfo.text.street,
    transmission: formData.transmission,
    trunk_volume: +formData.trunkVolume.split(" ")[0],
    uid: userId,
    vehicle_condition: formData.vehicleCondition,
    vehicle_name: formData.vehicleName,
    week_price: +formData.weekPrice,
  });

  return { offerId, error };
};
