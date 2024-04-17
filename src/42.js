// 42 - Simulação de resposta de API

function simulatorAPI(value, limit) {
  setTimeout(() => {
    const responseAPI = console.log(value);
    return responseAPI;
  }, limit);
}

try {
  simulatorAPI({ APIconnected: "https://api.simulator.com.br" }, 1000);
} catch (error) {
  console.log("Erro ao tentar se comunicar com API", error);
}
