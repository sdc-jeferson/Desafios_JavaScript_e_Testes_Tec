// 21 - Array de números aleatórios
// https://awari.com.br/javascript-random-gerando-numeros-aleatorios-em-javascript/
function createArrayNumberAleatory(tam, valueMin, valueMax) {
  const arrayRandom = [];
  for (let index = 0; index < tam; index++) {
    arrayRandom.push(
      Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin
    );
  }
  return arrayRandom;
}

console.log(createArrayNumberAleatory(10, 300, 500));
