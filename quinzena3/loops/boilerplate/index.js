/*
EXERCÍCIO 1

O que o código abaixo está fazendo? Qual o resultado impresso no console?

R: Acho que o resultado vai ser o valor final da variável. Será 5. Depois disso ele vai adicionar 5 que será o valor de i. Com isso, o console imprime 10.
*/

/* EXERCICIO 2

a. O que vai ser impresso no console?
Ele vai imprimir os números maiores que 18. São: 19, 21, 23, 25, 27 e 30.

b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
Acho que não seria suficiente. Talvez seja preciso usar o FOR com a estrutura completa. Porque dessa forma seria possível usar o .length

*/
//EXERCICIO 3
/* as perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

a. Escreva um programa que:

- **Imprima** cada um dos valores do array original.
*/

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let i = 0; i <= array.length; i++) {
//     console.log(array[i])
// }

/*
b. Escreva um programa que:

- **Imprima** cada um dos valores do array original divididos por 10
*/
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]/10)
// }


/*
c. Escreva um programa que:

- **Crie** um novo array contendo, somente, os números pares do array original.
- **Imprima** esse novo array
*/
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let i = 0; i <= array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
// }
/*

d. Escreva um programa que:

- **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
- **Imprima** este novo array
*/
//  const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//  let strings = []
//  for (let i = 0; i < array.length; i++) {
//      strings.push("O elemento do índex " + i + "é: " + array[i])
//  }
//  console.log(strings)

/*

e. Escreva um programa que imprima no console o maior e o menor números contidos no array original 
Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.
*/
 const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
 let valorMaximo = 125;
 let valorMinimo = 22

 for (let i = 0; i <= array.length; i++)
     if (array[i] > valorMaximo) {
        valorMaximo = array[i]
         console.log("O maior número é " + valorMaximo) 
     } else if (array[i] < valorMinimo) {
         valorMinimo = array[i]
         console.log("O menor número é: " + valorMinimo)
     } 