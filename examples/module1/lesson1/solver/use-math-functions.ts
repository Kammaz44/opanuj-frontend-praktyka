export const useMathFunctions = () => {
  function addition(a: number, b: number) {
    return a + b;
  }
  function subtraction(a: number, b: number) {
    return a - b;
  }
  function multiplication(a: number, b: number) {
    return a * b;
  }

  function division(a: number, b: number) {
    return a / b;
  }

  return {
    addition,
    subtraction,
    multiplication,
    division,
  };
};
