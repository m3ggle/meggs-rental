import { useSearchParams } from "react-router-dom";

export const useUrlManipulation = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const setIndividualParam = (desiredParam, desiredValue) => {
        searchParams.set(desiredParam, desiredValue)
        setSearchParams(searchParams)
    }
    
    return { setIndividualParam };
}