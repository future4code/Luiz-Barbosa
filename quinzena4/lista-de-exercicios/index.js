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

// ====================================================================================================================
/* Exercício Objetos
1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.
R: Devemos usar quando é necessário armazenar mais de um dado dentro de uma mesma variável, pois fica mais organizado do que criar diversas variáveis com nomes diferentes pra armazenar informações relacionadas.

2. Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e retorna um objeto com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área (`lado1 * lado2`).
*/

// const criaRetangulo = (lado1, lado2) => {
//     let retangulo = {
//         largura : lado1,
//         altura : lado2,
//         perimetro: (2*(lado1 + lado2)),
//         area: lado1*lado2
//     }
    
//     return retangulo
// }

// let mostraRetangulo = criaRetangulo(100, 50);
// console.log(mostraRetangulo)

/*
3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto:
`Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n`. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.
*/

// const filme = {
//     titulo: "The Perks of Being a Wallflower",
//     ano: 2012,
//     diretor: "Stephen Chbosky",
//     elenco: ["Emma Watson", "Logan Lerman", "Ezra Miller", "Nina Dobrev"]
// }

// console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.elenco[0]}, ${filme.elenco[1]}, ${filme.elenco[2]} e ${filme.elenco[3]}`)

/*
4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de `nome`, `idade`, `email` e `endereco`. Crie uma função chamada `anonimizarPessoa`, que deverá retornar um **novo** objeto com as mesmas propriedades, mas com a string `ANÔNIMO` no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.
*/

// const pessoaQualquer = {
//     nome: "Ronald Bilius Weasley",
//     idade: 40,
//     email: "ronweasley@hogwartsmail.com",
//     endereco: "The Burrow"
// }

// const anonimizarPessoa = {
//     ... pessoaQualquer,
//     nome: "ANÔNIMO"
// }

// console.log(anonimizarPessoa.nome)

//=======================================================================================================================
//Exercicio de Funções de Array

/*
Considere um array com o seguinte formato:
a) Faça uma função que retorne um **novo array** só com os adultos (pessoas com idade igual ou superior a 20)
*/
// const pessoinhas =
// [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ];

// const maioresDeIdade = pessoinhas.filter((item, index, array) => {
//     if (item.idade >= 18) {
//         return true
//     }
//     return false
// })

// console.log(maioresDeIdade)

/*
b) Faça uma função que retorne um novo array só com as crianças/adolescentes (pessoas com idade inferior a 20) 
*/
// const pessoinhas =
//     [
//     	{ nome: "Pedro", idade: 20 },
//     	{ nome: "João", idade: 10 },
//     	{ nome: "Paula", idade: 12 },
//     	{ nome: "Artur", idade: 89 } 
//     ];
    
//     const menoresDeIdade = pessoinhas.filter((item, index, array) => {
//         if (item.idade < 18) {
//             return true
//         }
//         return false
//     })
    
//     console.log(menoresDeIdade)

//2 -Em todos os itens deste exercício, você terá que escrever uma função cuja entrada seja um array. Para testes, considere: 



//a) Escreva uma função que retorne um array com as entradas multiplicadas por 2. Isto é [2, 4, 6, 8, 10, 12].
// const array = [1, 2, 3, 4, 5, 6]
// let multiplicador = array.map((item, index, array) => {
//     return array[index]*2
// })
    
// console.log(multiplicador)

//b) Escreva uma função que retorne um array com as entradas multiplicadas por 3 e como strings. Isto é: ["3", "6", "9", "15", "18"]

// const array = [1, 2, 3, 4, 5, 6]
// let multiplica = array.map((item, index, array) => {
//     return (array[index]*3).toString()
// })
    
// console.log(multiplica)

//c) Escreva uma função que retorne um array de strings dizendo: "${número} é par/impar". Isto é: ["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"] 

// const arrayDeNumeros = [1, 2, 3, 4, 5, 6]
// let parouImpar = arrayDeNumeros.map((item, index, array) => {
//     if(item % 2 === 0) {
//             return `${item} é par`
//         } else {
//             return `${item} é ímpar`
//         }
// })

// console.log(parouImpar)

//2 - Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. Considere, então, essas pessoas:

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

/*A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.

a) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **tem permissão de entrar** no brinquedo*/

// let permitidos = pessoas.filter((item, index, array)=> {
//     if(item.idade> 14 && item.idade <60 && item.altura>1.5) {
//         return item
//     }
// })
// console.log(permitidos)

/*b) Escreva uma função que receba este array e devolva outro array somente com as pessoas que não podem entrar no brinquedo.*/

// let naoPermitidos = pessoas.filter((item, index, array)=> {
//     if(item.idade < 14 || item.idade > 60 || item.altura < 1.5) {
//         return item
//     }
// })

// console.log(naoPermitidos)

//4 Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, lembrando-os de sua consulta marcada; ou avisa-los que foi cancelada. Considere, então, essas consultas:

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// let email = consultas.map((item,index,array)=>{
//     if(item.cancelada) {
//         return `Olá, Sr./Sra. ${item.nome}. Infelizmente, sua consulta marcada
//         para o dia ${item.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
//         contato conosco para remarcá-la`
//     } else {
//         return  `Olá,  Sr./Sra. ${item.nome} . Estamos enviando esta mensagem para lembrá-lo / lembrá-la
//         da sua consulta no dia ${item.dataDaConsulta }. Por favor, acuse
//         o recebimento deste e-mail.`
//     }
// })

// console.log(email)

// Preciso encontrar uma forma de usar item.genero

//5 Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Veja abaixo:

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

//A sua tarefa é: faça uma função que receba um **array** com os objetos do tipo acima e atualize o **saldo total** individual de cada um, **sem criar um novo** array.

let atualizacao = contas.forEach(element => {
        return element.saldoTotal - element.compras[i]
});

console.log(atualizacao)