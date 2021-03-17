// Modifique o código do exercício 7 para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo `prompt` que snack ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "... com `[SNACK]`", trocando [SNACK] pelo que o usuário colocou no input.


// const filmeDoDia = prompt("Qual o gênero do filme?")
// const valorDoFilme = Number(prompt("Quanto custa o ingresso?"));

// if (filmeDoDia === "fantasia" && valorDoFilme < 15) {
//    let snack = prompt("Qual snack você vai comer?")
//     console.log("Bom filme!", 'e com', snack)
// } else {
//     console.log("Escolha outro filme!")
// }

//DESAFIO 2

let nome = prompt('Qual o seu nome?')
let tipoDeJogo = prompt('Qual o tipo de jogo?').toLowerCase()
let etapaDoJogo = prompt('Qual a etapa do jogo?').toUpperCase()
let categoria = Number(prompt('Qual categoria?'))
let quantidadeIngressos = Number(prompt('Quantos ingressos?'))


let valorIngresso

if (etapaDoJogo === 'SF' && categoria === 1) {
    valorIngresso = 1320
} else if (etapaDoJogo === 'DT' && categoria === 1) {
    valorIngresso = 660
} else if (etapaDoJogo === 'FI' && categoria === 1) {
    valorIngresso = 1980
} else if(etapaDoJogo === 'SF' && categoria === 2) {
    valorIngresso = 880
} else if(etapaDoJogo === 'DT' && categoria === 2) {
    valorIngresso = 440
} else if (etapaDoJogo === 'FI' && categoria === 2) {
    valorIngresso = 1320
} else if(etapaDoJogo === 'SF' && categoria === 3) {
    valorIngresso = 550
} else if(etapaDoJogo === 'DT' && categoria === 3) {
    valorIngresso = 330
} else if (etapaDoJogo === 'FI' && categoria === 3) {
    valorIngresso = 880
} else if(etapaDoJogo === 'SF' && categoria === 4) {
    valorIngresso = 220
} else if(etapaDoJogo === 'DT' && categoria === 4) {
    valorIngresso = 170
} else if (etapaDoJogo === 'FI' && categoria === 4) {
    valorIngresso = 330
} else {
    console.log('shazam')
}




let valorTotal = valorIngresso*quantidadeIngressos

if(tipoDeJogo === 'internacional') {
    valorTotal *= 4.1
} 




console.log(
    `Dados da compra:
    Nome: ${nome},
    Tipo de Jogo: ${tipoDeJogo},
    Etapa do Jogo: ${etapaDoJogo},
    Categoria: ${categoria},
    quantidade de ingressos: ${quantidadeIngressos}

    ============== valores a pagar ==================
    Valor do ingresso: ${valorIngresso}
    Valor total: ${valorTotal}

    `
)

console.log(valorIngresso, valorTotal)