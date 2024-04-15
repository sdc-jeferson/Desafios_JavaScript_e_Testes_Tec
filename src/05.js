const DivisibilityCheck = (x, y) => {
  if (x % y === 0) {
    return `${x} é divisivel por ${y}`;
  } else {
    return `${x} não é divisivel por ${y}`;
  }
};

console.log(DivisibilityCheck(7, 5));
