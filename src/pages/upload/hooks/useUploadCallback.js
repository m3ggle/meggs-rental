import { useNavigate } from "react-router-dom";
import { toastNotify } from "../../../components/toastNotify/toastNotify";
import supabase from "../../../config/supabaseClient";
import { useUserContext } from "../../../context/user/userContext";
import { useMultiStepHelper } from "../../../hooks/useMultiStepHelper";
import { checkCompleteness } from "../helpers/checkCompletness";
import { uploadOfferData } from "../helpers/uploadOfferData";
import { uploadOfferPictures } from "../helpers/uploadOfferPictures";

const useUploadCallback = () => {
  const { handleStorage, handleContinue, handleGoBack } = useMultiStepHelper();
  const { userId } = useUserContext();
  const { notifyStandard } = toastNotify();
  const navigate = useNavigate();

  const handleSubmit = async (pictures = []) => {
    notifyStandard({
      information: {
        type: "info",
        content: "This may take a while.",
      },
      id: "uploadInit",
    });

    const formData = JSON.parse(localStorage.getItem("uploadData"));

    if (checkCompleteness({ formData, userId }) || pictures.length === 0) {
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
    const { offerId, error } = await uploadOfferData({ formData, userId });

    if (error || offerId === null || !offerId) {
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
    const { pictureUrls } = await uploadOfferPictures({ offerId, pictures });

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
    localStorage.removeItem("uploadData");
    navigate("/users-offers");
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

  return { handleCallback, handleSubmit };
};

export default useUploadCallback;
