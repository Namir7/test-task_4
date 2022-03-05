export const logger = (
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) => {
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
};
