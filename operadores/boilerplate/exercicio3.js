
 /*   2. Faça um programa que:
a. Peça ao usuário que insira um número **par**.

    Dica: não se esqueça de converter a resposta para o tipo número

    b. Imprima na tela **o resto da divisão** desse número por 2.
    c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
    */

   let numeroPar = parseInt(prompt("Insira um número par!"));

   let restoDivisao = numeroPar % 2;
   console.log(restoDivisao);

   //d - Se o usuário insere um número par o resto é sempre 0. Se o usuário insere um número impar, o resultado é sempre 1.