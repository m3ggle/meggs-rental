import imageCompression from "browser-image-compression";

export async function compressImages({ images, maxSize = 1, width = 600, height = 600 }) {
  const promises = [];
  const outputImages = [];

  const options = {
    maxSizeMB: maxSize,
    maxWidthOrHeight: Math.max(width, height),
    fileType: 'image/webp',
    useWebWorker: true,
  };

  for (let i = 0; i < images.length; i++) {
    promises.push(imageCompression(images[i], options));
  }

  const compressedImages = await Promise.all(promises);
  for (let i = 0; i < images.length; i++) {
    outputImages.push(compressedImages[i]);
  }

  return outputImages;
}
