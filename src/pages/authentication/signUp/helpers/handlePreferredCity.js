// get the preferred city nested object flattened and ready for upload

export const handlePreferredCity = (preferredCity) => {
  const { bounds } = preferredCity;
  const { north, east, south, west } = bounds;

  let location = {};
  location.city = preferredCity.name.split(",")[0].trim();
  if (preferredCity.name.split(",").length === 3) {
    location.province = preferredCity.name.split(",")[1].trim();
    location.country = preferredCity.name.split(",")[2].trim();
  } else {
    location.province = preferredCity.name.split(",")[0].trim();
    location.country = preferredCity.name.split(",")[1].trim();
  }

  let flattenedFormatted = {
    north,
    east,
    south,
    west,
    latitude: preferredCity.center.lat,
    longitude: preferredCity.center.lng,
    city: location.city,
    province: location.province,
    country: location.country,
  };

  return flattenedFormatted;
};
