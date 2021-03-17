// Um resumo das funcionalidades são:

// - Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
// - A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
//     - O número chutado, com a mensagem: `O número chutado foi: <número>`
//     - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
// - Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

// let primeiroJogadorNumero = Number(prompt("Digite um numero qualquer!"));
let primeiroJogadorNumero = Math.floor((Math.random() * 100) + 1)

primeiroJogadorNumero && console.log("Vamos Jogar!");

let arrayDeChutes = [];

let chutes = Number(prompt("Chute qual numero foi escolhido pelo outro jogador!"));


for (let i = 0; chutes !== primeiroJogadorNumero; i++) {
    chutes = Number(prompt("Chute qual numero foi escolhido pelo outro jogador!"));
  if (chutes > primeiroJogadorNumero) {
    console.log(`Errou!! ${chutes} o número escolhido é menor!`);
  } else if (chutes < primeiroJogadorNumero) {
    console.log(`Errrrroooou! ${chutes} o número escolhido é maior`);
  } else {
    console.log("Acertouuu!");
  }
  arrayDeChutes.push(chutes);
}



console.log(`O numero de tentativas foi: ${arrayDeChutes.length}`);
