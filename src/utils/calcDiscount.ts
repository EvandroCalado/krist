export const calcDiscount = (value: number, discount: number | null) => {
  if (!discount) return value;

  const valueWithDiscount = (value * (100 - discount)) / 100;

  return valueWithDiscount;
};
