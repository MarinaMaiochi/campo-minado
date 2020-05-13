

let linhasCampo;
let colunasCampo;
let dificuldade;
let valorDificuldade = 10;
let qtdBombas;

function recebeValorLinhaColuna(){
  const inputLinha = document.querySelector('.linhasTab');
  linhasCampo = inputLinha.value;
  const inputColuna = document.querySelector('.colunasTab');
  colunasCampo = inputColuna.value;
}
function montaCampo(linha,coluna){
  const tabuleiro = document.querySelector(".tabuleiro");
  for (let i = 0; i < coluna; i++) {                     
    const divLinha = document.createElement('div');
    for (let j = 0; j < linha; j++) {
        const celula = document.createElement('div');
        celula.setAttribute("data-linha" , j);
        celula.setAttribute("data-coluna" , i);
        celula.classList.add('celula');
        celula.classList.add('vazio');
        divLinha.appendChild(celula);
    }
    tabuleiro.appendChild(divLinha);
  }
}
function addNivel(){
  document.querySelector('.facil').addEventListener('click', escolheNivel);
  document.querySelector('.medio').addEventListener('click', escolheNivel);
  document.querySelector('.dificil').addEventListener('click', escolheNivel);
}
function escolheNivel(event){
  const escolha = event.target;
  if (escolha.classList.contains('facil')) {
      dificuldade = 'FACIL' ;
      valorDificuldade = 10;
      document.querySelector('.facil').classList.remove('butEscuro');
      document.querySelector('.medio').classList.add('butEscuro');
      document.querySelector('.dificil').classList.add('butEscuro');
  } else if (escolha.classList.contains('medio')) {
      dificuldade = 'MEDIO' ;
      valorDificuldade = 7;
      document.querySelector('.medio').classList.remove('butEscuro');
      document.querySelector('.facil').classList.add('butEscuro');
      document.querySelector('.dificil').classList.add('butEscuro');
  } else if (escolha.classList.contains('dificil')) {
      dificuldade = 'DIFICIL' ;
      valorDificuldade = 4;
      document.querySelector('.dificil').classList.remove('butEscuro');
      document.querySelector('.facil').classList.add('butEscuro');
      document.querySelector('.medio').classList.add('butEscuro');
  } 
  const facil = document.querySelector('.facil');
  facil.removeEventListener('click', escolheNivel);
  const medio = document.querySelector('.medio');
  medio.removeEventListener('click', escolheNivel);
  const dificil = document.querySelector('.dificil');
  dificil.removeEventListener('click', escolheNivel); 
  colocaBomba();   
}
function colocaBomba(){
  qtdBombas = Math.floor((linhasCampo * colunasCampo) / valorDificuldade);
  for (let i = 0; i < qtdBombas; i++) {
    const vazios = document.querySelectorAll('.vazio');
    const aleatorio = Math.floor(Math.random() * vazios.length);
    vazios[aleatorio].classList.add('bomba');
    vazios[aleatorio].classList.remove('vazio');
   
  }
}
function contadorDeBomba(linhas,colunas){
 
  for (let i = 1; i < linhas-1; i++) {
    for (let j = 1; j < colunas-1; j++) {
      
      const celula = document.querySelector(`[data-linha="${i}"][data-coluna="${j}"]`);
      let valorDaCelula = 0;
      for (let m = -1; m < 2; m++) {
        for (let n = -1; n < 2; n++) {
          if (document.querySelector(`[data-linha="${i+m}"][data-coluna="${j+n}"]`).classList.contains('bomba')){
            valorDaCelula++;
            console.info(valorDaCelula);
          }
        } 
      }
      celula.innerText = valorDaCelula;
      console.info(valorDaCelula);
      if (celula.classList.contains('bomba')){
        celula.innerText = '';
      }
    }    
  }
}
recebeValorLinhaColuna();
montaCampo(linhasCampo,colunasCampo);
addNivel();
colocaBomba();
contadorDeBomba(linhasCampo,colunasCampo);


const novoJogo = document.querySelector('.novojogo');
novoJogo.addEventListener('click', chamaNovoJogo);
function chamaNovoJogo(){
  
  if (dificuldade != 'FACIL'){
      document.querySelector('.facil').classList.add('butEscuro');
  }
  if (dificuldade != 'MEDIO'){
      document.querySelector('.medio').classList.add('butEscuro');
  }
  if (dificuldade != 'DIFICIL'){
      document.querySelector('.dificil').classList.add('butEscuro');
  }
  document.querySelector(".tabuleiro").innerHTML = '';
  recebeValorLinhaColuna();
  montaCampo(linhasCampo,colunasCampo);
  addNivel();
  contadorDeBomba(linhasCampo,colunasCampo);
}

