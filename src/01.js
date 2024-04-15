// 01 - Conversão de temperatura

const coversionTempratureFarenheit = (celsius) => {
  const calcCelsiusforFarenheit = celsius * 1.8 + 32;
  return calcCelsiusforFarenheit;
};

const coversionTempratureCelsius = (farenheit) => {
  const calcFarenheitForCelsius = (farenheit - 32) / 1.8;
  return calcFarenheitForCelsius;
};

console.log(coversionTempratureCelsius(75));
