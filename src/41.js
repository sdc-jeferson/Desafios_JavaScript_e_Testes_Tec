// 41 - Execução condicional com callbacks
function main(checked, returnTrue, returnFalse) {
  if (checked()) {
    returnTrue();
  } else {
    returnFalse();
  }
}
function checked() {
  const randomNumber = Math.floor(Math.random() * 20);
  returnTrue(randomNumber);
  returnFalse(randomNumber);
  return randomNumber;
}
function returnTrue(num) {
  if (num > 5) {
    console.log(`O ${num} é maior que 5`);
  }
}
function returnFalse(num) {
  if (num < 5) {
    console.log(`O ${num} é menor que 5`);
  }
  return;
}

console.log(main(checked, returnTrue, returnFalse));
