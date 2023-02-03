export const filterMapboxResponseCity = (data) => {
  console.log(data);
  const filteredList = data.data.features.filter(
    (feature) =>
      feature.id && feature.place_name && feature.center && feature.bbox
  );

  const tempList = filteredList.map((feature) => {
    return {
      id: feature.id,
      name: feature.place_name,
      extraInfo: {
        bounds: {
          north: feature.bbox[3],
          east: feature.bbox[2],
          south: feature.bbox[1],
          west: feature.bbox[0],
        },
        center: {
          lat: feature.center[1],
          lng: feature.center[0],
        },
      },
    };
  });

  return tempList;
};

export const filterMapboxResponseStreet = (data) => {
  // check if the necessary information is there else do not consider the particular result any further
  const filteredList = data.features.filter(
    (feature) => feature.id && feature.place_name && feature.center
  );

  const tempList = filteredList.map((feature) => {
    const text = handleMapboxResponseStreetContext(feature.context);

    return {
      id: feature.id,
      name: feature.place_name,
      extraInfo: {
        text: {
          street: feature.text ?? null,
          houseNumber: feature.address ?? null,
          ...text,
        },
        center: {
          lat: feature.center[1],
          lng: feature.center[0],
        },
      },
    };
  });

  return tempList;
};

const handleMapboxResponseStreetContext = (context = []) => {
  const finishedObj = {};
  context.forEach((obj) => {
    if (obj.id.includes("place")) {
      finishedObj.city = obj.text ?? null;
      return;
    }
    if (obj.id.includes("region")) {
      finishedObj.province = obj.text ?? null;
      return;
    }
    if (obj.id.includes("country")) {
      finishedObj.country = obj.text ?? null;
      return;
    }
  });

  return finishedObj;
};
