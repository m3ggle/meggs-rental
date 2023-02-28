import supabase from "../../config/supabaseClient";

export const getChatroomId = async ({offerId, ownerId, borrowerId, }) => {
  let { data, error } = await supabase.rpc("get_chatroom_id", {
    borrower_id: borrowerId,
    offer_id: offerId,
    owner_id: ownerId,
  });

  if (error) console.error(error);
  return data;
};
