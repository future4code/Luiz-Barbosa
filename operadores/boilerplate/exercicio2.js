/*Exercício de Escrita de código: 
1. Faça um programa que:
a. Pergunte a idade do usuário
b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
*/
//     Dica: não se esqueça de converter as respostas para o tipo número

//     c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
//     d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)

    let idadeUsuario = parseInt(prompt('Quantos anos você tem?'));
    let idadeAmigo = parseInt(prompt('Qual a idade do seu melhor amigo?'));

    let maisVelho = idadeUsuario > idadeAmigo;
    let diferencaIdade = idadeUsuario - idadeAmigo;

    console.log("Sua idade é maior do que a do seu melhor amigo? " + maisVelho);

    console.log("A diferença de idade é de " + diferencaIdade);
