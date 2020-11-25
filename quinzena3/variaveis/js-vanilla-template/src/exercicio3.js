// Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// a) Imprima na tela o array completo

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

let comidasFavoritas = ['batata frita', 'sushi', 'burritos', 'bolo', 'strogonoff'];

console.log(comidasFavoritas);
console.log('Essas são minhas comidas favoritas: ');

console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

// console.log(prompt('Qual é a sua comida favorita?'));

comidasFavoritas.push(prompt('Qual sua comida favorita?'));

 console.log(comidasFavoritas);

 // Não consegui descobrir como substituir um item específico, mas consegui adicionar no final :/