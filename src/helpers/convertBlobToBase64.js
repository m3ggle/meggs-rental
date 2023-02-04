// export const convertBlobToBase64 = async (blobArray) => {
//   const base64Array = [];
//   for (let i = 0; i < blobArray.length; i++) {
//     const reader = new FileReader();
//     reader.readAsDataURL(blobArray[i]);
//     reader.onload = () => {
//       base64Array.push(reader.result);
//     };
//   }
//   return base64Array;
// };

export const convertBlobToBase64 = (blob) => {
    // return Promise.all([

    // ])
  
    return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}