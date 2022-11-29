import Filter from "../components/filter/Filter";
import SearchFilter from "../components/filter/SearchFilter";
import { useWindowSize } from "./useWindowSize";

export const useRenderFilter = () => {
  const windowSize = useWindowSize();

  const renderFilter = () => {
    if (windowSize.width >= 1000) {
      return <Filter isOpen={true} filterModal={false} />;
    } else {
      return (
        <div className="w-[312px]">
          <SearchFilter choice="search" />
        </div>
      );
    }
  };

  return { renderFilter };
};
