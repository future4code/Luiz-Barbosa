/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


// Essas sao as cartas e pontuações do jogo
const primeiraUsuario = comprarCarta();
const segundaUsuario = comprarCarta();
const pontosUsuario = primeiraUsuario.valor + segundaUsuario.valor;
const primeiraComputador = comprarCarta();
const segundaComputador = comprarCarta();
const pontosComputador = primeiraComputador.valor + segundaComputador.valor;
//Aqui o jogo inicia.
if(confirm("Quer iniciar uma nova rodada?")) {
	console.log("Bem vindo ao jogo de Blackjack!");
} else {
   console.log("O jogo acabou.")
}

// Se as primeiras cartas forem A, sortear de novo
// if (primeiraComputador || primeiraUsuario === "A") {
//    comprarCarta();
// } 

//Aqui o jogo pergunta se deve sortear mais cartas.

if (confirm("Suas cartas são " + primeiraUsuario.texto + "e " + segundaUsuario.texto + " A carta revelada do computador é " + primeiraComputador.texto + " Deseja comprar mais uma carta?")) {
      comprarCarta();
   } else {
      console.log("O jogo acabou!")
   }


console.log("Usuário - cartas: " + primeiraUsuario.texto, segundaUsuario.texto + "- pontuação " + pontosUsuario);
console.log("Computador - cartas: " + primeiraComputador.texto, segundaComputador.texto + "- pontuação " + pontosComputador) 

const cartasExtraUsuario = [];



for (confirm("Quer iniciar uma rodada?"); confirm("Deseja outra carta?"); comprarCarta()) {
   cartasExtraUsuario.push()
   console.log(cartasExtraUsuario.texto)
}
 

if (pontosUsuario > pontosComputador) {
    console.log("O usuário ganhou!")
 } else if (pontosComputador < pontosComputador) {
  console.log("O computador venceu!")
   } else {
      console.log("Empatou!")
   }