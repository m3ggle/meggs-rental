import supabase from "../../config/supabaseClient";

export const uploadChatroom = async ({
  offerId,
  ownerId,
  borrowerId,
  messageContent,
}) => {
  let { data: chatroomId, error } = await supabase.rpc("upload_chatroom", {
    borrower_id: borrowerId,
    message_content: messageContent,
    offer_id: offerId,
    owner_id: ownerId,
  });

  if (error) console.error(error);
  return chatroomId;
};
