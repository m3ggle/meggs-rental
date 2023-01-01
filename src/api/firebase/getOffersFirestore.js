import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getOffersFirestore = async (offers = []) => {
  let userOffers = await Promise.all(
    offers.map((offerId) => getDoc(doc(db, "offers", offerId)))
  );

  // get data from promise
  userOffers = userOffers.map((offer) => offer.data());

  return userOffers;
};
