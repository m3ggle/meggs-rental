import ExampleData from "../../../ExampleData";
import CatalogList from "../../../pages/explore/catalog/components/CatalogList";
import SearchFilter from "../../../pages/explore/catalog/components/SearchFilter";
import MobileCatalogList from "./MobileCatalogList";

const { exampleOffers } = ExampleData();

const MobileCatalog = () => {
  return (
    <div
      className={`relative flex h-[640px] w-[360px] max-w-[360px] flex-col items-center gap-y-3 overflow-scroll rounded-2xl bg-white py-6 shadow-xl dark:bg-dmGrey900`}
    >
      <div className="w-[312px]">
        <SearchFilter />
      </div>

      <div className="flex w-full flex-grow flex-col items-center overflow-scroll rounded-lg pb-4">
        <div className={`flex w-[312px] flex-col gap-y-3 rounded-lg`}>
          <MobileCatalogList offerList={exampleOffers} />
        </div>
      </div>
    </div>
  );
};

export default MobileCatalog;
