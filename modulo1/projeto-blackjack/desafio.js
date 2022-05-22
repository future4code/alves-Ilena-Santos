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
let pontuacaoUsuario = 0
let pontuacaoComputador = 0
let fimDoJogo = false



if (confirm("Boas vindas ao jogo Blackjack! \n Quer iniciar uma nova rodada?")) {
   while (fimDoJogo == false && pontuacaoUsuario < 21) {
      if (rodadas == 0 && pontuacaoComputador == 11 && pontuacaoUsuario == 11) {
         cartasUsuario = []
         cartasComputador = []
         pontuacaoUsuario = 0
         pontuacaoComputador = 0
      }
      if (rodadas <= 1) {
         carta = comprarCarta()
         let somaDeCartasComputador = cartasComputador.push(carta.texto)
         pontuacaoComputador = Number(pontuacaoComputador + (carta.valor))
         carta = comprarCarta()
         let somaDeCartasUsuario = cartasUsuario.push(carta.texto)
         pontuacaoUsuario = Number(pontuacaoUsuario + (carta.valor))

      }
      while (fimDoJogo == false && rodadas > 1 && pontuacaoUsuario < 21) {
         if (confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador[0]}` +
            "\n" +
            "Deseja comprar mais uma carta?")) {
            carta = comprarCarta()
            let somaDeCartasUsuario = cartasUsuario.push(carta.texto)
            pontuacaoUsuario = Number(pontuacaoUsuario + (carta.valor))
         } else {
            while (pontuacaoComputador < pontuacaoUsuario) {
               carta = comprarCarta()
               let somaDeCartasComputador = cartasComputador.push(carta.texto)
               pontuacaoComputador = Number(pontuacaoComputador + (carta.valor))
            }
            fimDoJogo = true
         }
      }

      rodadas = rodadas + 1
   }


   if (pontuacaoUsuario >= 21) {
      alert(
         `Suas cartas são ${cartasUsuario} . Sua pontuação é ${pontuacaoUsuario}.\n ` +
         `As cartas do computador são ${cartasComputador} . A pontuação do computador é ${pontuacaoComputador}. \n` +
         `O computador ganhou!`)

   } else if (pontuacaoComputador > pontuacaoUsuario && pontuacaoUsuario < 21) {
      alert(
         `Suas cartas são ${cartasUsuario} . Sua pontuação é ${pontuacaoUsuario}.\n ` +
         `As cartas do computador são ${cartasComputador} . A pontuação do computador é ${pontuacaoComputador}. \n` +
         `O usuário ganhou!`)
   } else {
      alert(
         `Suas cartas são ${cartasUsuario} . Sua pontuação é ${pontuacaoUsuario}.\n ` +
         `As cartas do computador são ${cartasComputador} . A pontuação do computador é ${pontuacaoComputador}. \n` +
         `Empatou!`)
   }

} else {
   console.log("o jogo acabou")
}


