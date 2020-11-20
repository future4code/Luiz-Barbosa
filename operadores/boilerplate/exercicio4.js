// 3. Faça um programa, seguindo os passos:

// a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c. Imprima o array na tela
// d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
// e. Remova da lista o item de índice que o usuário escolheu.
// f. Imprima o array na tela

let listaDeTarefas = [];

listaDeTarefas.push(prompt('Qual tarefa você precisa fazer hoje?'))
listaDeTarefas.push(prompt('Qual tarefa você precisa fazer hoje?'))
listaDeTarefas.push(prompt('Qual tarefa você precisa fazer hoje?'))

console.log(listaDeTarefas);

let tarefaRealizada = prompt("Qual delas você ja fez? 0, 1 ou 2?");

listaDeTarefas.splice(tarefaRealizada);

console.log(listaDeTarefas);