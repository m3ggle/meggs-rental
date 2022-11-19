import { euDateSyntaxToUsDateSyntax } from "./euDateSyntaxToUsDateSyntax";

export const createDate = (stringDate) => {
  return new Date(euDateSyntaxToUsDateSyntax(stringDate));
};
