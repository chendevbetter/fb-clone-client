export const lengthValidation = (str: string, min: number, max: number) => {
  return str.length >= min && str.length <= max;
};
