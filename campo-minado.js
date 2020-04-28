let linhasCampo = 24;
let colunasCampo = 18;
let qtdBombas;



function montaCampo(linha,coluna){
  const tabuleiro = document.querySelector(".tabuleiro");

  for (let i = 0; i < coluna; i++) {                     
    const divLinha = document.createElement('div');
    for (let j = 0; j < linha; j++) {
        const celula = document.createElement('div');
        celula.setAttribute("data-linha" , j);
        celula.setAttribute("data-coluna" , i);
        celula.classList.add('celula');
        divLinha.appendChild(celula);
    }
    tabuleiro.appendChild(divLinha);
  }
}
montaCampo(linhasCampo,colunasCampo);
