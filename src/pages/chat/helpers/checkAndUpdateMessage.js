import supabase from "../../../config/supabaseClient";
import { stripAnyWhiteSpace } from "../../../helpers/stripAnyWhiteSpace";

export const checkAndUpdateMessage = async ({ payload, userId }) => {
  if (stripAnyWhiteSpace(payload.new.user_id) !== stripAnyWhiteSpace(userId)) {
    let { error } = await supabase.rpc("update_message", {
      is_read_boolean: payload.new.is_read_by.length === 1,
      is_read_by_array: [userId, ...payload.new.is_read_by],
      message_id: payload.new.id,
    });

    if (error) console.error(error);
  }
};
