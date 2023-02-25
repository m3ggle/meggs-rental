import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";

export const useHandleCatalogFilter = () => {
  const { getAllParams } = useUrlManipulation();

  const formatString = (str = "") => {
    let formattedStr = str.replace(/ /g, "_");
    formattedStr += "_";
    return formattedStr;
  };

  const handleCatalogFilter = () => {
    const allParams = getAllParams();
    console.log(allParams)
    //   let filter = {};

    // for (const [key, value] of Object.entries(allParams)) {
    //   const formattedKey = formatString(key);
    //   filter[key] = value;
    // }
  };

  return { handleCatalogFilter };
};
