console.log(`Trabalhando com condicionais.`);

console.log('destinos oferecidos:');

const listaDeDestinos = new Array(
    `kyoto`,
    `Shenzhen`,
    `Bali`,
    `Bangkok`,
    `Moscou`
);

console.log(listaDeDestinos);

const idadeComprador = 18;
const menorAcompanhada = true;

if(idadeComprador < 18) {
  console.log("Comprador menor de idade, não podemos vender as passagens.");
}
  
  else if (menorAcompanhado == true) {
 console.log(`o menor tá acompanhado, pode viaja`);
}

else {
  console.log(`Qual seu destino?`);
  console.log(listaDeDestinos[1]);
}
