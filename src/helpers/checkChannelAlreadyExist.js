import supabase from "../config/supabaseClient";

export const checkChannelAlreadyExist = (channelName) => {
  const allChannels = supabase.getChannels();
  let alreadyExists = false;

  allChannels.forEach((channel) => {
    if (channel.topic.split(":")[1] === channelName) {
        alreadyExists = true;
        return
    }
  });

  return alreadyExists;
};
