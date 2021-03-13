// Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:

// a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
// 20lb equivalem a X kg


// let pesoLb = 20;

// let pesoKg = pesoLb * 2.20462;

// console.log("20lb equivalem a", pesoKg, "Kg")

// b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
// 10.5oz equivalem a X kg

// let pesoOz = 10.5;

// let pesoKg = pesoOz / 35.274;

// console.log("10.5oz equivalem a", Math.ceil(pesoKg), "Kg")


// c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
// // 100mi equivalem a X m


// let milhas = 100;

// let metros = milhas * 1609;

// console.log('100mi equivalem a', metros, 'metros')

// d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
// 50ft equivalem a X m

// let feet = 50;

// let metro = feet * 0.3048;

// console.log('50ft equivalem a', metro, 'metros')

// e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
// 103.56gal equivalem a X l

// let gallon = 103.56;

// let litros = gallon * 3.78541;

// console.log('103.56gal equivalem a', Math.round(litros), 'litros')

// f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
// 450 xic equivalem a X l

// let xicaras = 450;

// let litros = xicaras * 0.236588;

// console.log('450 xicaras equivalem a', Math.round(litros), 'litros')

// g. Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter. 

let xicaras = Number(prompt('insira uma quantidade de xícaras'));

let litros = xicaras * 0.236588;

console.log(xicaras, 'xicaras equivalem a', Math.round(litros), 'litros')