import { stripAnyWhiteSpace } from "../../../../helpers/stripAnyWhiteSpace";

// get the preferred city nested object flattened and ready for upload

export const handlePreferredCity = (preferredCity) => {
    const { bounds } = preferredCity;
    const { north, east, south, west } = bounds;

    let location = {};
    location.city = stripAnyWhiteSpace(preferredCity.name.split(",")[0]);
    if (preferredCity.name.split(",").length === 3) {
        location.province = stripAnyWhiteSpace(preferredCity.name.split(",")[1]);
        location.country = stripAnyWhiteSpace(preferredCity.name.split(",")[2]);
    } else {
        location.province = stripAnyWhiteSpace(preferredCity.name.split(",")[0]);
        location.country = stripAnyWhiteSpace(preferredCity.name.split(",")[1]);
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
}