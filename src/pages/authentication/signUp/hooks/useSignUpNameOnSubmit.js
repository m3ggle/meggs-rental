import { useUrlManipulation } from "../../../../hooks/urlManipulation/useUrlManipulation";
import { useMultiStepHelper } from "../../../../hooks/useMultiStepHelper";


export const useSignUpNameOnSubmit = () => {
    const { handleStorage } = useMultiStepHelper();
    const { getSingleParam, setSingleParam } = useUrlManipulation();
    
    const onSubmit = (data) => {
      handleStorage(data, "signUpData");
      setSingleParam("round", +getSingleParam("round") + 1);
    };

    return {onSubmit}
}
