//- Exercícios de interpretação de código ==========================================================================

/*
1 - Na primeira função, foi criada uma função que pede ao usuário pra inserir a cotação do dólar, retorna o valor dado como parâmetro na hora de chamar a função, multiplicado pelo valor inserido pelo usuário. Nesse caso, multiplica 100 pelo valor da cotação.

2 - Essa função recebe 2 parâmetros, o primeiro é o tipo de investimento e o segundo o valor em número. A função cria uma variável vazia e seu valor depende do resultado quando o programa entra no switch case logo abaixo. Dependendo do valor inserido na hora de chamar a função, ele entra em um case do switch, calcula e retorna o valor no console log das novas variáveis criadas pra armazenar o resultado. Caso o valor não se encaixe em nenhum dos cases, um alert é mostrado com uma mensagem dizendo que o conteudo inserido é incorreto.

3 -Acredito que a intenção desse loop é descobrir quantos numeros pares e ímpares existem dentro desse primeiro array numeros. Esse loop + if checam se o resto da divisão por 2 dos números é igual a zero, e se sim, joga ele dentro de um array vazio, caso contrário, dentro do segundo array vazio. 
Depois disso, ele imprime no console.log a quantidade de números dentro dos novos arrays. 

4 - Foi criado um array com vários números e duas variaveis com valor infinity e 0.  Foi criado um for que checa cada item do array pra ver se eles são maiores ou menores que os valores das variáveis numero1 e numero2. 
Mas pelo que eu entendi, o console vai mostrar os mesmos números no primeiro log. Porque todos os números são menores que infinity. Já no segundo console.log só vai faltar o número negativo, mas vai mostrar todos os outros também.

Exercícios de Lógica de Programação ===================================================================================

1 - cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

Pode ser feito com 2 formas de for. O for...of, o loop de for comum, usando index, e o i++ ou pode ser feita com o map() e forEach().

Por exemplo: */

// const array = [11, 25, 77, 13, 17, 10, 12, 14, 125, 75]

//  for (let i = 0; i < array.length; i++) {
//      if(i % 2 === 0) {
//         console.log(array[i]*2)
//      } else {
//          console.log(array[i])
//      }

// }

// Nesse caso, criei um loop que multiplica os índices do array alternadamente, no caso, só os indices pares, caso não sejam pares, os números são impressos normalmente.

/*
 2 - Para este exercício considere as seguintes variáveis:

 a) booleano1 && booleano2 && !booleano4.

 R: False

 b) (booleano1 && booleano2) || !booleano3
 R: True

 c) (booleano2 || booleano3) && (booleano4 || booleano1)
 R: True

 d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
 R: True

 e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
 R: True

 3- Você tem que escrever um código que, dado um número N, ele imprima (no console) os N primeiros números pares (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:
 */

//     const quantidadeDeNumerosPares
//         let i = 0
//         while(i <= quantidadeDeNumerosPares) {
//         console.log(i*2)
// }

//Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.
//R: Eu acho que isso vai dar em nada, não tem incremento no while. Além disso, a primeira constante declarada não tem valor atribuído à ela. Acho que usar ela como parâmetro pro while também nem dá certo. PRecisa também checar se o numero é par.
//Acho que eu faria assim:

// let i = 0

// while (i < 10) {
//     if (i % 2 ===0) {
//     console.log(i)
//     }

//     i++;
// }

/*
4 - Vocês lembram de trigonometria? (Oh, não, trigonometria). Relaxem. O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. Se um triângulo possuir os três lados iguais, ele é chamado de "Equilátero". Se possuir, dois (e somente 2) lados iguais, diz-se que ele é "Isósceles". Se os três lados tiverem medidas diferentes, ele é "Escaleno". Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: a, b, c  e retorne se ele é equilátero, isósceles ou escaleno.
*/

// const triangulos = (ladoA, ladoB, ladoC) => {
//   if (ladoA === ladoB && ladoB === ladoC) {
//     console.log("Esse é um triangulo equilátero");
//   } else if (ladoA === ladoB && ladoB !== ladoC) {
//     console.log("Esse triângulo é isósceles");
//   } else if (ladoA || ladoB || ladoC) {
//     console.log("Esse triângulo é Escaleno");
//   }
// };
// triangulos(5, 5, 5);

/*
5. Faça um programa que, dados dois números,

    i. indique qual é o maior,

    ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

    iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre) */

    // let primeiroNumero = Number(prompt("Insira o primeiro número!"))
    // let segundoNumero = Number(prompt("Insira o segundo número!"))

    // if (primeiroNumero > segundoNumero) {
    //     console.log(`O número maior é: ${primeiroNumero}`)
    // } else {
    //     console.log(`O numero maior é ${segundoNumero}`)
    // }

    // if (primeiroNumero % segundoNumero === 0) {
    //     console.log(`${primeiroNumero} é divisível por ${segundoNumero}`)
    // } else {
    //     console.log(`${primeiroNumero} não é divisível por ${segundoNumero}`)
    // }


    // function diferenca(numero1, numero2) {
    //     return Math.abs(primeiroNumero - segundoNumero);
    //   }
    
    // let diferencaAritmetica = diferenca(primeiroNumero, segundoNumero)
    // console.log(`A diferença entre eles é ${diferencaAritmetica}`)

    //======================================================================================================================
    // Exercicio de funções
    /*  1 - Escreva uma função que receba um array de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)*/

    // let arrayDeNumeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

    // const maiorEMenor = () => {
    //     let maior = 20
    //     let menor = 2
    //     for(let i = 0; i >= arrayDeNumeros.length; i++) {
    //         if (arrayDeNumeros[i]> maior) {
    //             maior = arrayDeNumeros[i]
    //         } else if (arrayDeNumeros[i] <)
    //     }

    //não entendi isso.

/*  Escreva uma função não nomeada que faça um alert("Hello Future4");. Em seguida, invoque essa função.*/

// let fazAlert = () => {
//     alert("Hello Future4")
// }

// fazAlert()