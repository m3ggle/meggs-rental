export const handleFormatting = (returnArray = []) => {
  const result = returnArray.map((item) => {
    return {
      id: item.id,
      name: item.offer_name,
      score: item.sim_score,
    };
  });
  
  return result;
};
