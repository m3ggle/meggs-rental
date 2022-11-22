// getAge("2001/10/21")
export const getAge = (birthday) => {
  let birthdate = new Date(birthday);
  let cur = new Date();
  let diff = cur - birthdate;
  let age = Math.floor(diff / 31536000000);
  return age;
};
