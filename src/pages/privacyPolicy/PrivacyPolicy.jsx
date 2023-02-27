import React from "react";
import { useForm } from "react-hook-form";
import OfferCard from "../../components/offerCard/responsive/offerCard/OfferCard";

const PrivacyPolicy = () => {
  const { control } = useForm();

  const handleClick = async () => {};

  const handleCallback = (data) => {
    console.log(data);
  };

  const offer = {
    amount_seats: 2,
    day_price: 30,
    formatted: "28 Rue Clisson",
    id: "f7da5f32-937c-462f-b0e7-bff02f5f51ba",
    latitude: 48.832157,
    longitude: 2.36732,
    month_price: 400,
    offer_name: "(Test) Lamborghini Countach",
    offer_status: "available",
    picture_urls: [
      "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDEud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTM4NiwiZXhwIjoxOTg5MDUxMzg2fQ.zXQA4lQGo28VYQsChvKdv9KiSDKQDOqLvrHwOpeCA10",
      "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDIud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQxMSwiZXhwIjoxOTg5MDUxNDExfQ.djdU2b17LMlHDjMcqFIXzzgeuOdEhaIyHm1JZlyzPIo",
      "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDMud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQ0NywiZXhwIjoxOTg5MDUxNDQ3fQ.Snx833z5I-r0YYqOWqGwtpw0S0RMVjh_qUD9GcN5jjI",
      "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach4.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDQud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQ1OSwiZXhwIjoxOTg5MDUxNDU5fQ.igRXHMJZH2KncqErwyZjwx-6369QmQWj6m8EcHNKhN0",
      "https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDUud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQ2OSwiZXhwIjoxOTg5MDUxNDY5fQ.GHumSJ3e1SKqw2s2dMcDWCEWjafaJLG6hgjj0yL2Ab0&t=2023-01-14T10%3A17%3A49.943Z",
    ],
    sim_score: null,
    transmission: "Manual",
    week_price: 250,
    is_liked: false
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2 overflow-scroll">
      {/* <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div> */}

      <OfferCard offerInformation={offer} index={1} />

      {/* <MobileCatalogAutocomplete
        control={control}
        callbackFunction={handleCallback}
      />

      <OfferNameAutocomplete
        control={control}
        callbackFunction={handleCallback}
      /> */}
    </div>
  );
};

export default PrivacyPolicy;
