const calcIMC = (height, weight) => {
  const IMC = (weight / height ** 2) * 100;
  return IMC;
};

console.log(calcIMC(175, 96));
