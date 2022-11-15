import { useSearchParams } from "react-router-dom";

export const useHandlingParams = () => {
    let [searchParams, setSearchParams] = useSearchParams();

  const handleUrlUpdate = (data, type) => {
    if (type === "filter") {
      searchParams.get("search") && (data.search = searchParams.get("search"));
      const newParams = new URLSearchParams(data);
      setSearchParams(newParams);
    } else if (type === "search") {
      searchParams.set("search", data.search);
      setSearchParams(searchParams);
    }
  };

  const handleSingleDelete = (inputName) => {
    searchParams.delete(inputName);
    setSearchParams(searchParams);
  };

  return { handleUrlUpdate, handleSingleDelete };
}