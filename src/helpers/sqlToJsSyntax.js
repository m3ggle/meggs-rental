/*
{user_name: "m1ggle"}
to 
{userName: "m1ggle"}
*/

export const sqlToJsObject = (sqlSyntaxObject) => {
  let result = {};
  for (const [key, value] of Object.entries(sqlSyntaxObject)) {
    let splitUp = key.split("_");
    let inProcess = "";
    splitUp.forEach((part, index) => {
      index === 0
        ? (inProcess += part)
        : (inProcess += part.charAt(0).toUpperCase() + part.slice(1));
    });
    result[inProcess] = value;
  }
  return result;
};

export const jsToSqlObject = (jsSyntaxObject) => {
  let result = {};
  for (const [key, value] of Object.entries(jsSyntaxObject)) {
    const newKey = key.split(/(?=[A-Z])/);
    let inProcess = "";
    newKey.forEach((part, index) => {
      index === 0
        ? (inProcess += part.toLocaleLowerCase())
        : (inProcess += `_${part.toLocaleLowerCase()}`);
    });
    result[inProcess] = value;
  }
  return result
};

export const sqlToJsString = (str) => {
  let splitUp = str.split("_");
  let inProcess = "";
  splitUp.forEach((part, index) => {
    index === 0
      ? (inProcess += part)
      : (inProcess += part.charAt(0).toUpperCase() + part.slice(1));
  });
  return inProcess;
};
