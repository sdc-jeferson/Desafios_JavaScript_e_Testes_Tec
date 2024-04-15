// 20 - Palíndromo

const word = "arara";
const phrase = "eu sou o jeferson";

function isPalindrome(str) {
  // Remove espaços e caracteres de pontuação, converte para minúsculas
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");

  //verifica se a string é igual a sua forma invertida
  return cleanStr === str.split("").reverse().join("");
}

function isPhrase(str) {
  // Verifica se a string contém espaços
  return /\s/.test(str);
}

console.log(`A palavra "${word}" é um palíndromo: ${isPalindrome(word)}`);
console.log(`A frase "${phrase}" é uma frase: ${isPhrase(phrase)}`);
