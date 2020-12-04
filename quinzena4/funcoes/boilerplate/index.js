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

//Tenho uma sensação que não foi isso que o enunciado pedia. Mas funciona, what now?

// const apresentacao = (nome, idade, cidade, profissao) => {
//     let nome = ;
//     let idade = ;
//     let cidade = ;
//     let profissao = ;

//     If (profissao) {
//         profissao = "sou estudante"
//     } else {
//         profissao = "não sou estudante"
//     }
    
//     return nome, idade, cidade, profissao
// }

// apresentacao(prompt("Qual seu nome?"), Number(prompt("Qual sua idade?")), prompt("Onde você mora?"), confirm("Você é estudante?"))

//dessa forma não funcionou nada, nem entrou na função, eu acho kkk 

/*EXERCICIO 5
Escreva as funções explicadas abaixo:

a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/ 

const somatorio = (number1, number2) => {
    let soma = number1 + number2
    console.log(soma)
}

somatorio(34, 35) 


/*
b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)*/


