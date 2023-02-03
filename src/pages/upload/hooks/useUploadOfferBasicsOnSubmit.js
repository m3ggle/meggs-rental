export const useUploadOfferBasicsOnSubmit = ({ handleCallback, setError }) => {
  const onSubmit = (data) => {
    const offerLocation = JSON.parse(
      localStorage.getItem("uploadOfferLocation")
    );

    if (data.city === undefined || offerLocation === null || !offerLocation) {
      setError("city", {
        type: "custom",
        message: "Offer location is required",
      });
    }

    delete data.city;
    data.offerLocation = offerLocation;
    const nextStep = true;
    handleCallback({ data, nextStep });
  };
    
    return { onSubmit };
};