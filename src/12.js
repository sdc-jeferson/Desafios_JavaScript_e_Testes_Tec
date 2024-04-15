// 12 - Números primos
let num = 100;
let list = [];

for (let index = 1; index < num; index++) {
  const numbersList = num % index !== 0;

  if (numbersList) {
    list.push(index);
  }
}
console.log(list);
