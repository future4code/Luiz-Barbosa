// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
let nome = '';


// // b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
 let idade = '';


// // c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
 console.log(typeof nome);
 console.log(typeof idade);

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
//Acho que apareceu isso porque escrevi um espaço vazio entre '', quando isso acontece, é uma string.

// d) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
 nome = prompt('Qual eu nome?');
 idade = prompt('Qual sua idade?');

// Dica: se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

// e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log(typeof nome);
console.log(typeof idade);
// f) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
console.log('Olá ' + nome);
console.log('Você tem ' + idade, ' anos');
