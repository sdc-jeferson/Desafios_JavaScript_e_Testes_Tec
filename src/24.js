// 25 - Interseção de arrays

const fruit = ["Laranja", "Maça", "Banana", "uva"];
const fruit2 = ["Laranja", "Maçazinha", "Banana"];

function findCommomItems(array1, array) {
  const items = array1.filter((item) => array.includes(item));
  return items;
}

console.log(findCommomItems(fruit, fruit2));
