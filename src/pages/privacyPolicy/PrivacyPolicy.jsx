import axios from "axios";
import React from "react";
import Btn from "../../components/common/Btn";
import TestOffersJson from "../../testDataOffers/testOffersSum.json";
import { v4 as uuidv4 } from "uuid";
import { doc, writeBatch } from "firebase/firestore";
import { db } from "../../firebase.config";

const PrivacyPolicy = () => {
  // const { openUserDetailsModal, uid } = useUserDetailsModalContext();
  // const {handleGetUserDetails} = useGetUserDetailsModal()

  // const handleClick = async () => {
  //   openUserDetailsModal("5BT8oUalNVXnyo1mbBjhZLaxceW2");
  // };

  // useEffect(() => {
  //   if (uid !== null) {
  //     handleGetUserDetails("5BT8oUalNVXnyo1mbBjhZLaxceW2");
  //   }
  // }, [uid, handleGetUserDetails]);

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibTFnZ2xlIiwiYSI6ImNsYXVtaHM0ejA1eTgzdm1wMmRkaDBnNDAifQ.ayNDhREPUzI4mBOyVjor6A";

  // ! testoffers
  const handleClick = async () => {
    // prep
    let testOffers = TestOffersJson

    // action
    const batch = writeBatch(db);
    for (let offer of testOffers) {
      // id
      offer.offerId = uuidv4();

      // name
      offer.name = "(Test) Lamborghini Countach"
      
      // location
      const tempLocation = await handleLocationPreparation(offer);
      offer.location = tempLocation

      // batch
      batch.set(doc(db, "offers", offer.offerId), offer);
    }

    // commit
    await batch.commit().then(result => {
      console.log(result)
    });
  };

  const handleLocationPreparation = async (offer) => {
    // prep
    const address = offer.location.formatted;
    const country = toISO3166(offer.location.country);
    const city = offer.location.city

    // call to mapbox
    const result = await handleCall(address, country, city);
    console.log(result);

    // modeling data
    let resultCity = null;
    let resultProvince = null;
    let resultCountry = null;
    let resultLat = null;
    let resultLng = null;
    let resultHouseNumber = null;
    let resultStreet = null;
    let resultFormatted = null;

    result.context.forEach((item) => {
      if (item.id.includes("place")) {
        resultCity = item.text;
        return;
      }
      if (item.id.includes("region")) {
        resultProvince = item.text;
        return;
      }
      if (item.id.includes("country")) {
        resultCountry = item.text;
        return;
      }
    });

    if (resultProvince === null) {
      resultProvince = resultCity ?? null;
    }

    resultLat = result.center[1] ?? null;
    resultLng = result.center[0] ?? null;

    resultHouseNumber = result.address ?? null;
    resultStreet = result.text ?? null;
    resultFormatted = result.place_name.split(",")[0] ?? null;

    // tieing up the result
    const location = {
      city: resultCity,
      province: resultProvince,
      country: resultCountry,
      houseNumber: resultHouseNumber,
      lat: resultLat,
      lng: resultLng,
      street: resultStreet,
      formatted: resultFormatted,
    };

    // return result
    return location;
  };

  const handleCall = async (address, country, city) => {
    return await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${
          address + "," + city
        }.json?access_token=${MAPBOX_TOKEN}&country=${country}&routing=true&autocomplete=false`
      )
      .then((res) => {
        return res.data.features[0];
      })
      .catch((error) => {
        console.error(error);
        throw new Error(error);
      });
  };

  const toISO3166 = (country) => {
    switch (country) {
      case "Germany":
        return "DE";
      case "France":
        return "FR";
      case "Spain":
        return "ES";
      case "Italy":
        return "IT";
      case "United Kingdom":
        return "GB";
      default:
        break;
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2">
      <div className="h-fit w-fit">
        <Btn
          title="click to open"
          uiType="primary"
          type="button"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
