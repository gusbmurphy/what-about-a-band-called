import ObjectId from "mongodb";

export function typeOfObjectId(props, propName, componentName) {
  let error;
  const prop = props[propName];
  if (!ObjectId.isValid(prop)) {
    error = new Error(
      `\`${componentName}\` must have bandId property of type \`ObjectId\`.`
    );
  }
  return error;
}
