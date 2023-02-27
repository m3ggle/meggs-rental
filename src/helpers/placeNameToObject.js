export const placeNameToObject = (placeName = "") => {
  const parts = placeName.split(", ");
  const formattedName = { city: "", province: "", country: "" };
  const numParts = parts.length;

  formattedName.city = parts[0];
  formattedName.country = parts[numParts - 1];

  if (numParts === 2) {
    formattedName.province = formattedName.city;
  } else if (numParts === 3) {
    formattedName.province = parts[1];
  } else if (numParts === 4) {
    formattedName.province = parts[2];
  }
    
  return formattedName;
};
