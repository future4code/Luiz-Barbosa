/*EXERCÍCIO 1

Leia o código abaixo:

a. O que vai ser impresso no console?

R: No console vai aparecer: 
10
50
Ele vai pegar os numeros dados dentro dos parenteses e multiplicar por 5.

b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? 

R: O resultado iria existir, mas não ia acontecer nada, porque não estou fazendo nada com ele, então ele não aparece.*/

/*EXERCÍCIO 2

Leia o código abaixo:

a. Explicite quais são as saídas impressas no console.

R: Ele vai imprimir os nomes do array até o index 1, no caso "Darvas" e "Goli", porque o FOR está programado pra encerrar se ele funcionar enquanto for menor que 2. Se fosse <=, até apareceria "João", mas não nesse caso. 

b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?

R: Nesse caso, os valores iam mudar pra "Amanda" e "Caio".*/

/*EXERCICIO 3 
O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!

R: Pelo que eu entendi, ela vai receber um array de números, vai verificar se esses números são pares e se forem, vai multiplicar aquele elemento por ele mesmo. Depois de multiplicar por ele mesmo, vai inserir ele no ArrayFinal. Eu daria pra essa função o nome de: parVezesPar. (que péssimo kkk). */

/*EXERCICIO 4

a.
A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: */

// const apresentacao = () => {
//     console.log("Eu sou Luiz, tenho 26 anos, moro em Joinville e sou estudante.")
// }

// apresentacao()
/*
b.Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
*/

// const apresentacao = () => {
//     const nome = prompt("Qual seu nome?")
//     const idade = Number(prompt("Qual sua idade?"))
//     let cidade = prompt("Onde você mora?")
//     let profissao = confirm("Você é estudante?")
    
//     if (profissao) {
//         profissao = "sou estudante"
//     } else {
//         profissao = "não sou estudante"
//     }
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ` + profissao)
// }

// apresentacao()


/*EXERCICIO 5
Escreva as funções explicadas abaixo:

a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/ 

// const somatorio = (number1, number2) => {
//     let soma = number1 + number2
//     return soma
// }

// const resultadoSoma = somatorio(34, 35) 
// console.log(resultadoSoma)


/*
b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo. */

// const maiorIgual = (number1, number2) => {
//     if (number1 > number2) {
//         console.log("O primeiro número é maior.")
//     } else if (number1 === number2) {
//         console.log("Os números são iguais")
//     } else {
//         console.log("Insira outro número!")
//     }
// }

// maiorIgual(Number(prompt("Insira o primeiro número!")), Number(prompt("Insira o segundo número!")))

/*c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)*/

// const texto = prompt("Insira uma frase")

// const repeteString = () => {
//     for (let i = 0; i < 10; i++) {
//         console.log(texto)
//     }
// }

// repeteString()

/* EXERCÍCIO 6

Para os itens a seguir, considere o seguinte array para os seus testes:

a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele: */

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// const quantidadeElementos = (array) => {
//     console.log(array.length)
// }

// quantidadeElementos(array)

/*b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não*/

// let parOuImpar = function (number1) {
//     if (number1 % 2 === 0) {
//         console.log(`${number1} é par`)
//     } else {
//         console.log(`${number1} não é par`)
//     }
// }


// let respostaPar = parOuImpar(Number(prompt("Insira um número!")))


/*c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele*/

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let arrayPares = []

// let quantosPares = function (array) {
//     for (item of array) {
//         if (item % 2 === 0) {
//             arrayPares.push(item)
//             console.log(item, 'é par')
//         } 
//     }
// }
// quantosPares(array)
// console.log(arrayPares.length)

/*d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par*/


// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let arrayPares = []
// const quantosPares = function (array) {
//     for (item of array) {
//         if (item % 2 === 0) {
//             console.log(`${item} é par`)
//             arrayPares.push(item)
//         } else {
//             console.log(`${item} é ímpar`)
//         }
//     }
// }

// quantosPares(array)
// console.log(arrayPares.length)

//era isso? kkk I don't know

/*----------------------------------DESAFIO--------------------------------------*/


//EXERCICIO 1

/*Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções: 

1.  Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro.*/

// const imprimeParametro = (frase) => {
//     console.log(frase)
// }

// imprimeParametro(prompt("Insira sua frase!"))

/*2. Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimí-lo.*/

// const imprimeDoisParametros = (valor1, valor2) => {
//      const soma = valor1 + valor2   
//      imprimeParametro(soma)
//  }

//  const imprimeParametro = (soma) => {
//           console.log(soma)
//  }
    
// imprimeDoisParametros("Lady ", "Gaga")
     


//EXERCÍCIO 2

/*Considere o seguinte array e utilize ele para os exercícios:
a. Escreva uma função que receba um array como parâmetro e retorne um array com apenas os números pares e multiplicados por 2.*/

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
//  const multiplicaPares = (array) => {
//      for (item of array) {
//           if (item % 2 === 0) {
//               console.log(item * 2)
//           } else {
//              console.log(item)
//           }
//      }
// }

// multiplicaPares(numeros)

// /*b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array. */

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// let maiorDoArray = numeros.reduce((accumulator, currentValue) => {
//     if (currentValue > accumulator) {
//         return currentValue
//     }
// })

// console.log(maiorDoArray)

// const maiorNumero = (array) => {
//     for(let i = 0; i <= array.length; i++) {
//         if(array[i] > array[2]) {
//             console.log(array[i])
//         }
// }
// }

/* c. Escreva uma função que receba um array como parâmetro e retorne o **índice** do maior número deste array.*/
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

const maiorNumero = (array) => {
 let resultado =  array.indexOf(41)
 return resultado
}
const resultado = maiorNumero(numeros) 
console.log(resultado)


// let maiorDoArray = numeros.reduce((accumulator, currentValue) => {
//          if (currentValue > accumulator) {
//              return currentValue
//          }
//      })

//      console.log(maiorDoArray)

// /*d. Escreva uma função que recebe um array como parâmetro e retorne este array invertido.*/

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// const numerosInvertidos = () => {
//      numeros.reverse()
// }


// numerosInvertidos()

// console.log(numeros)