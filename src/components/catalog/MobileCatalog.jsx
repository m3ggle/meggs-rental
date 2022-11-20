import { Controller, useForm } from "react-hook-form";
import SearchFilter from "../../pages/explore/catalog/components/SearchFilter";
import TextInput from "../input/TextInput";
import LittleOfferCard from "../LittleOfferCard";

const MobileCatalog = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // Todo: filter btn inside TextInput

  return (
    <div
      className={`relative flex h-[640px] w-[360px] max-w-[360px] flex-col items-center gap-y-3 overflow-scroll rounded-2xl bg-white py-6 shadow-xl dark:bg-dmGrey900`}
    >
      <div className="w-[312px]">
        <SearchFilter />
      </div>

      <div className="flex w-full flex-grow flex-col items-center overflow-scroll rounded-lg pb-4">
        <div className={`flex w-[312px] flex-col gap-y-3 rounded-lg`}>
          <LittleOfferCard
            name="Tesla Model 3"
            location="Salzburger Straße 18"
            price="100"
            transmission="Automatic"
            seats={5}
          />
          <LittleOfferCard
            name="Tesla Model 3"
            location="Salzburger Straße 18"
            price="100"
            transmission="Automatic"
            seats={5}
          />
          <LittleOfferCard
            name="Tesla Model 3"
            location="Salzburger Straße 18"
            price="100"
            transmission="Automatic"
            seats={5}
          />
          <LittleOfferCard
            name="Tesla Model 3"
            location="Salzburger Straße 18"
            price="100"
            transmission="Automatic"
            seats={5}
          />
          <LittleOfferCard
            name="Tesla Model 3"
            location="Salzburger Straße 18"
            price="100"
            transmission="Automatic"
            seats={5}
          />
          <LittleOfferCard
            name="Tesla Model 3"
            location="Salzburger Straße 18"
            price="100"
            transmission="Automatic"
            seats={5}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileCatalog;
