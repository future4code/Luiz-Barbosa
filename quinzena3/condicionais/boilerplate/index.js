/*EXERCÍCIO 1
Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?
R: O código pede para o usuário inserir um número. O código também transforma o valor inserido em tipo number e com isso ele verifica se o número é par. Ele verifica se o resto da divisão do número por 2 é igual a 0. Se o número for par, a resposta é true, então imprime "Passou no teste", se for ímpar, a resposta é false e ele imprime "Não passou no teste."*/

//Exercício 2
/*a. Para que serve o código acima? O código serve pra verificar qual a fruta e de acordo com o nome, indicar o valor dela.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta maçã é R$ 2.25.

c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? Se retirássemos o break, ele iria imprimir o valor da pêra e o default: 5.5 e 5.
*/

//EXERCICIO 3
/*
a. O que a primeira linha está fazendo? A primeira linha define a variável numero através de um prompt. Essa variável é usada dentro do IF.

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
O console vai mostrar a mensagem: "Este número passou no teste"
Se fosse -10 daria false e não mostraria nada.
c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. Acho que não vai mostrar mensagem nenhuma, talvez diga que não está definida a variavel no console.log que vem depois do IF, porque a variavel está apenas dentro do IF.
 */
/*
EXERCÍCIO 4

Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`*/
//  const idade = Number(prompt("Qual sua idade?"))

//  if (idade > 18) {
//      console.log("Você pode dirigir!")
//  } else {
//     console.log("Você não pode dirigir, você é um bebê!")
//  }
//não sei o que acontece, mas NUNCA funcionou usar number() nenhuma das vezes que tentei escrever nos códigos até hoje...

/*EXERCÍCIO 5

Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else` */

//  const parteDoDia = prompt("Em qual turno você estuda? Digite M , V  ou N").toUpperCase();
//  console.log(parteDoDia) 

//   if (parteDoDia == "M") {
//       console.log("Bom dia!")
//   } else if (parteDoDia == "V") {
//       console.log("Boa tarde!")
//  } else if(parteDoDia == "N") {
//      console.log("Boa noite!")
//   } else {
//       console.log("Deu ruim")
//  }

// EXERCÍCIO 6

//Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

// let parteDoDia = prompt("Em qual turno você estuda? Digite M (matutino), V (vespertino) ou N, (noturno)")

// switch (parteDoDia) {
//   case "M":
//   console.log("Bom Dia!")
//   break;
//   case "V":
//   console.log("Boa Tarde!")
//   break;
//   case "N":
//   console.log("Boa noite!")
// }

//EXERCICIO 7
//Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const filmeDoDia = prompt("Qual o gênero do filme?")
// const valorDoFilme = Number(prompt("Quanto custa o ingresso?"));

// if (filmeDoDia === "fantasia" && valorDoFilme < 15){
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme!")
// }