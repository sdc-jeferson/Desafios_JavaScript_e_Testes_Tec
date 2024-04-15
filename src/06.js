// 06 - Classificação de faixa etária

const ageRange = (age) => {
  if (age > 0 && age <= 12) {
    return "Criança";
  } else if (age >= 13 && age <= 17) {
    return "Adolescente";
  } else if (age >= 18 && age <= 59) {
    return "Adulto";
  } else {
    return "Idoso";
  }
};

console.log(ageRange(13));
