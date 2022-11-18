import { useSearchParams } from "react-router-dom";

export const useGetAllParams = () => {
  let [searchParams] = useSearchParams();
  
    const getAllParams = () => {
    let tempHolder = {};
    for (const [key, value] of searchParams.entries()) {
      tempHolder[key] = value;
    }
    return tempHolder;
    };
    
    return { getAllParams };
};
