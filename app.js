
let listaDeNumerosSorteados = [];
let numeroLimite = 10 ; 
let numeroSecreto = gerarNumeroALeatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  /* responsiveVoice.speak(texto , 'Brazilian Portuguese Female',
    {rate:0.9});*/

}

function exibirMensageminicial() {
  exibirTextoNaTela('h2' , 'By Marcelo Bevilacqua');
  exibirTextoNaTela('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');

}
exibirMensageminicial();



function verificarChute() {

  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {

    exibirTextoNaTela('h1', 'Acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : ' tentativa';

    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;

    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');

  } else {

    if (chute > numeroSecreto) {

      exibirTextoNaTela('p', 'O número secreto é menor!');

    } else {

      exibirTextoNaTela('p', 'O número secreto é maior!');

    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroALeatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite ){
    listaDeNumerosSorteados == [];
  }
  if(listaDeNumerosSorteados.includes(numeroEscolhido) ){
    return gerarNumeroALeatorio();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroALeatorio();
  limparCampo();
  tentativas = 1;
  exibirMensageminicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);

}
