import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../../components/toastNotify/toastNotify";
import supabase from "../../../config/supabaseClient";
import { useUserContext } from "../../../context/user/userContext";
import { useMultiStepHelper } from "../../../hooks/useMultiStepHelper";

const useUploadCallback = () => {
  const { handleStorage, handleContinue, handleGoBack } = useMultiStepHelper();
  const { userId } = useUserContext();
  const { notifyStandard } = toastNotify();
  const navigate = useNavigate();

  const checkCompleteness = (formData) => {
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
      formData.pictureUrls.length === 0 ||
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

  // startDate and endDate: startDate ?? null

  const handleSubmit = async () => {
    notifyStandard({
      information: {
        type: "info",
        content: "This may take a while.",
      },
      id: "uploadInit",
    });

    const formData = JSON.parse(localStorage.getItem("uploadData"));

    if (checkCompleteness(formData)) {
      notifyStandard({
        information: {
          type: "warning",
          content: "Missing information.",
        },
        id: "uploadWarning",
      });
      return;
    }

    // uploading offers
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

    if (error) {
      console.log(error);
      notifyStandard({
        information: {
          type: "warning",
          content: "Something internally went wrong.",
        },
        id: "uploadOfferUpload",
      });
      return;
    }

    // uploading images to storage
    const pictureUrls = await Promise.all(
      formData.pictureUrls.map((picture) =>
        supabase.storage
          .from("user-offers")
          .upload(`${offerId}/${picture.name}`, picture, {
            contentType: "image/webp",
            upsert: true,
          })
      )
    );

    // ! picture upload does not correctly work

    // preparation for inserting the images regarding the offer
    const prox =
      "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/public/user-offers/";
    const urls = pictureUrls.map((data) => {
      return prox + data.data.path;
    });

    // inserting images in offer
    await supabase.rpc("update_offer_pictures", {
      oid: offerId,
      picture_urls: urls,
    });

    notifyStandard({
      information: {
        type: "success",
        content: "Offer was created",
      },
      id: "uploadOffer",
    });
    localStorage.removeItem('uploadData')
    navigate('/users-offers')
  };

  const handleCallback = ({ data, nextStep }) => {
    switch (nextStep) {
      case "finish":
        // localStorage.removeItem("uploadData");
        // navigate("/homepage");
        handleStorage(data, "uploadData");
        handleSubmit();
        break;
      case true:
        handleContinue();
        handleStorage(data, "uploadData");
        break;
      case "back":
        handleGoBack();
        break;
      case "close":
        localStorage.removeItem("uploadData");
        navigate("/users-offers");
        break;
      default:
        break;
    }
  };

  return { handleCallback };
};

export default useUploadCallback;
