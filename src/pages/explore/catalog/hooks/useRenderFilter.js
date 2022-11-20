import { useWindowSize } from "../../../../hooks/useWindowSize";
import Filter from "../components/Filter";
import SearchFilter from "../components/SearchFilter";

export const useRenderFilter = () => {
  const windowSize = useWindowSize();

  const renderFilter = () => {
    if (windowSize.width >= 1000) {
      return <Filter isOpen={true} filterModal={false} />;
    } else {
      return (
        <div className="w-[312px]">
          <SearchFilter />
        </div>
      );
    }
  };

  return { renderFilter };
};
