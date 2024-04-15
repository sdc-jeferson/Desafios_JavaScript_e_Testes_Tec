// ### 28 - Filtrando propriedades
const object1 = {
  age: 32,
  height: 176,
  weight: 68,
  score: 87,
  temperature: 23,
};

const obj2 = {
  oi: 1,
  tudo: 2,
  bem: 3,
};

const props = ["age", "score", "temperature", "oi"];

function checkPropertyInArray(obj) {
  props.map((prop) => {
    if (obj.hasOwnProperty(prop)) {
      console.log(`Propriedade ${prop}, valor ${obj[prop]}.`);
    }
  });
}
checkPropertyInArray(obj2);
