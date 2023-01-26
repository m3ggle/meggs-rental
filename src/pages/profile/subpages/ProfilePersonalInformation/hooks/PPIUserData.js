import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import supabase from "../../../../../config/supabaseClient";
import { useUserContext } from "../../../../../context/user/userContext";
import { sqlToJsObject } from "../../../../../helpers/sqlToJsSyntax";

// profile personal information user data
export const PPIUserData = () => {
  const { personalInformationId } = useUserContext();

    const [userData, setUserData] = useState({
      bio: null,
      birthday: null,
      city: null,
      country: null,
      email: null,
      firstName: null,
      gender: null,
      lastName: null,
      phone: null,
      profilePictureUrl: null,
      province: null,
      smoker: null,
      userId: null,
    });

  const getPersonalInformation = async () => {
    if (personalInformationId) {
      return supabase.rpc("get_personal_information", {
        uid: personalInformationId,
      });
    }
    return null;
  };

  const onError = (error) => {
    console.log("an error occurred, ", error);
  };

  let { data } = useQuery(
    ["get_user_with_preferred_city", personalInformationId],
    getPersonalInformation,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onError,
    }
  );

  useEffect(() => {
    if (data?.data !== null && data?.data) {
      setUserData(sqlToJsObject(data.data));
    }
  }, [data]);

  return { userData };
};
