export const toDesirableStructure = (data) => {
  const {
    latitude,
    longitude,
    north,
    east,
    south,
    west,
    city,
    province,
    country,
  } = data;

  data.preferredCity = {
    coordinates: {
      center: {
        latitude,
        longitude,
      },
      bounds: {
        north,
        east,
        south,
        west,
      },
    },
    text: {
      city,
      province,
      country,
    },
  };

  [
    "latitude",
    "longitude",
    "north",
    "east",
    "south",
    "west",
    "city",
    "province",
    "country",
  ].forEach((e) => delete data[e]);

  delete data.latitude;

  return data;
};
