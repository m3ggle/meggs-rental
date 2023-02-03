import { useQuery } from "react-query";
import supabase from "../config/supabaseClient";

export const useGetUserWithPersonalInformation = (userId) => {
  const getUser = async () => {
    if (userId !== null) {
      return supabase.rpc("get_user_with_personal_information", {
        uid: userId,
      });
    }
    return { error: null, data: null };
  };

  const { data, isLoading } = useQuery(
    ["get_user_with_personal_information", userId],
    getUser,
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: Infinity, // ten minutes
    }
  );

  return { userWithPersonal: data?.data, isLoading, error: data?.error };
};
