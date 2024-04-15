// 07 - Comparação de números

const compareNumbers = (num1, num2) => {
  if (num1 > num2) {
    return `${num1} é maior que ${num2}`;
  } else if (num1 < num2) {
    return `${num1} é menor que ${num2}`;
  } else {
    return `${num1} é igual a ${num2}`;
  }
};

console.log(compareNumbers(12, 12));
