// 24 - Concatenar arrays

function removeDuplicates() {
  const arrayUnique = [];
  array.map((item) => {
    if (arrayUnique.indexOf(item) === -1) {
      arrayUnique.push(item);
    }
  });
  return arrayUnique;
}

const array = [1, 2, 20, 4, 1, 2, 10, 8, 9, 10, 20, 30];
const arrayNoDuplicate = removeDuplicates(array);
console.log(arrayNoDuplicate);
