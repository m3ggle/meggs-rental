import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useAuthOSignIn } from "./useAuthOSignIn";

export const useAuthInitial = () => {
  // const { setUserIdSignIn } = useAuthOSignIn();

  // const getSession = async () => {
  //   return supabase.auth.getSession();
  // };
  // const onSuccess = (data) => {
  //   if (data.data.session !== null) {
  //     setUserIdSignIn(data.data.session.user.id); // meaning user is signed in
  //   }
  // };

  // useQuery(["retrieve_session"], getSession, {
  //   refetchOnMount: true,
  //   refetchOnWindowFocus: false,
  //   onSuccess,
  // });
};
