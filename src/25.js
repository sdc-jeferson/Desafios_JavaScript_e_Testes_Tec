// 26 - Média dos elementos
const entry1 = [0, 1, 2, 3];

let sum = 0;
let media = 0;
function checkMedia() {
  entry1.map((item) => {
    sum += entry1[item];
    media = sum / entry1.length;
  });
  return `A média dos valores é : ${media}`;
}

console.log(checkMedia());
