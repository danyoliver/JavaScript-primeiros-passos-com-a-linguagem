console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saopaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(`Salvador`, `São Paulo`,`Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`); // adicionando um item a lista

console.log(`Destinos Possíveis: `);
//console.log(salvador, saopaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);
