// 19 - Contagem de vogais

const text =
  "is simply dummy text of the printing and typesetting".toLowerCase();

function countVogal(str) {
  const countVogal = str.match(/[aeiou]/gi)?.length;
  if (countVogal) {
    return countVogal;
  } else {
    return 0;
  }
}
console.log(countVogal(text));
