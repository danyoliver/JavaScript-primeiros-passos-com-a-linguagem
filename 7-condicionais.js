console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`,`Rio de Janeiro`);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos Possíveis: `);
//console.log(salvador, saopaulo, rioDeJaneiro);
console.log(listaDeDestinos);

// if (idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); // Removendo item   
// } else if (estaAcompanhada == true){
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1,1); // Removendo item  
// } else {
//     console.log("Comprador não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa Viagem!!!");
    listaDeDestinos.splice(1,1); // Removendo item   
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!!!");
}else{
    console.log("Você não pode embarcar!!!");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);