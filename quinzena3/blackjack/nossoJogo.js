let primeiraUsuario;
let segundaUsuario;
let primeiraComputador;
let segundaComputador;
let result = confirm("Quer iniciar uma nova rodada?");
let pontosUsuario;
let pontosComputador;
// console.log(result)


const tiraCartas = () => {
   primeiraUsuario = comprarCarta();
   segundaUsuario = comprarCarta();
   primeiraComputador = comprarCarta();
   segundaComputador = comprarCarta();
   calcularTotal();
}

const calcularTotal = () => {
   pontosUsuario = primeiraUsuario.valor + segundaUsuario.valor;
   pontosComputador = primeiraComputador.valor + segundaComputador.valor;
   console.log("Usuário - cartas: " + primeiraUsuario.texto, segundaUsuario.texto + "- pontuação " + pontosUsuario);
   console.log("Computador - cartas: " + primeiraComputador.texto, segundaComputador.texto + "- pontuação " + pontosComputador);
   mensagemResultado();
}


const mensagemResultado = () => {

   if (pontosUsuario === pontosComputador) {
      console.log("Empatou!")
   } else if (pontosComputador > pontosUsuario) {
      console.log("O computador venceu!")
      } else {
      console.log("O usuário venceu!")
      } 
}

if(result) {
   console.log("Bem vindo ao jogo de Blackjack!");
   tiraCartas()
} else {
   console.log("O jogo acabou.")
}




   // Estou com esse problema infernal onde de alguma forma o jogo dá empate mesmo com os numeros sendo diferentes!! Nada resolve!!!
   //O estranho é que às vezes funciona certo e às vezes não. 

// console.log(primeiraUsuario.texto) 
// console.log(primeiraUsuario.valor) 


//Agora preciso fazer com que o console mostre as seguintes mensagens: "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
//"Computador - cartas: Q♣️ 10♣️  - pontuação 20" 
//preciso também que o console mostre cartas diferentes toda vez que o jogo iniciar. Preciso criar uma forma de que o console some a pontuação do usuário e do computador. Para que com essa soma, ele decida se o vencedor é o computador ou o usuário e assim monstre a mensagem de quem ganhou. (IF)
// comprarCarta();
// const pontosUsuario = cartas.valor;
// if ()


// const pontosComputador = comprarCarta();