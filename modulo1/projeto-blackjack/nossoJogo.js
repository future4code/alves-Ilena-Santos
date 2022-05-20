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
let carta = comprarCarta()

let rodadas = 0
let cartasUsuario = []
let cartasComputador = []
let pontuacaooUsuario = 0
let pontuacaoComputador = 0


console.log("Boas vindas ao jogo Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
   while (rodadas < 2) {
      carta = comprarCarta()
      let somaDeCartas = cartasUsuario.push(carta.texto)
      pontuacaooUsuario = Number(pontuacaooUsuario + (carta.valor))
      carta = comprarCarta()
      let somaDePontuação = cartasComputador.push(carta.texto)
      pontuacaoComputador = Number(pontuacaoComputador + (carta.valor))
      rodadas = rodadas + 1
   }
   console.log(`Usuário - cartas: ${cartasUsuario} - pontuação ${pontuacaooUsuario}`)
   console.log(`Computador - cartas: ${cartasComputador} - pontuação ${pontuacaoComputador}`)
   if (pontuacaooUsuario > pontuacaoComputador) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoComputador > pontuacaooUsuario) {
      console.log("O computador ganhou!")
   } else { console.log("Empate!") }

} else {
   console.log("o jogo acabou")
}

