export const calcDiscount = (value: number, discount: number) => {
  const valueWithDiscount = (value * (100 - discount)) / 100;

  return valueWithDiscount.toFixed(2);
};
