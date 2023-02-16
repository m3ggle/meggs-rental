export const useUploadOfferAvailabilityOnSubmit = ({ handleCallback, setError }) => {
  const onSubmit = (data) => {
    const { startDate, endDate } = data;
    const today = new Date();

    // date is further back than today
    if (new Date(startDate) < today) {
      setError("startDate", {
        type: "costume",
        message: "The starting date has to be today or in the future.",
      });
      return;
    }

    // end date is further back start date
    if (startDate > endDate) {
      setError("endDate", {
        type: "costume",
        message: "Invalid time span.",
      });
      return;
    }

    const nextStep = true;
    handleCallback({ data, nextStep });
  };

  return { onSubmit };
};