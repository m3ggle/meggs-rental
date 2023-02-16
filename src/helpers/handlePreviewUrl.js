export const handlePreviewUrl = async (files) => {
  const urls = await Promise.all(
    files.map((file) => URL.createObjectURL(file))
  );
  return urls;
};
