import { useQuery } from "react-query";
import supabase from "../../config/supabaseClient";
import { useAuthOSignIn } from "./useAuthOSignIn";

export const useAuthInitial = () => {
  const { setUserIdSignIn } = useAuthOSignIn();

  const getSession = async () => {
    return supabase.auth.getSession();
  };
  const onSuccess = (data) => {
    if (data.data.session !== null) {
      setUserIdSignIn(data.data.session.user.id); // meaning user is signed in
    }
  };

  useQuery(["retrieve_session"], getSession, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    onSuccess,
  });
};

/*
{ 
  "city":"Paris", --
  "east":2.4697091, --
  "west":2.224224923, --
  "north":48.9020121, --
  "south":48.815606901, --
  "country":"France", --
  "latitude":48.8534951, --
  "province":"Paris", --
  "last_name":"Bande", --
  "longitude":2.3483915, --
  "user_name":"m1ggle", --
  "first_name":"Meggle" --
}
*/