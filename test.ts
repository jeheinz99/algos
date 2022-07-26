const doubler = (x: number | number[]) => {
  const double = (x: number) => x * 2;
  if (Array.isArray(x)) {
    return x.map(double);
  }
  return double(x);
}