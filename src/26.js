// 27 - Soma de propriedades de um objeto
const object = {
  age: 32,
  height: 176,
  weight: 68,
  score: 87,
  temperature: 23,
};

function sumValuesProperty() {
  let sum = 0;
  for (const key in object) {
    sum += object[key];
  }
  return `A soma dos valores dessas propriedades ${sum}`;
}

console.log(sumValuesProperty());
