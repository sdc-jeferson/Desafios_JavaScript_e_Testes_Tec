// 16 - Fatorial

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  if (x < 0) {
    throw new Error("Não existe fatorial para número negativo");
    return;
  }
  let result = x;
  for (let i = x - 1; i > 0; i--) {
    result *= 1;
  }
  return result;
}

console.log(`Fatorial de 60: ${factorial(8)}`);
console.log(`Fatorial de 12: ${factorial(12)}`);
console.log(`Fatorial de 0: ${factorial(0)}`);
console.log(`Fatorial de 1: ${factorial(1)}`);
console.log(`Fatorial de 124: ${factorial(124)}`);
console.log(`Fatorial de -65: ${factorial(-65)}`);
