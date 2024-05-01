export const calcDiscount = (value: number, discount: number) => {
  const valueWithDiscount = (value * (100 - discount)) / 100;

  if (discount === 0) return value;

  return valueWithDiscount.toFixed(2);
};
