function desenvolvedor() {
  //Essa função apresenta informações úteis para o desenvolvedor
  push()
    textSize(20);
    fill('blue');
    text(`(mouseX,mouseY) = (${mouseX},${mouseY})`, 270, 20);
  pop()
}

// Gerenciamento de telas
var tela = 'menu'; //menu, credits, description, game, vitoria, derrota

// Dimensoes
var canvasWidth = 800;
var canvasHeight = canvasWidth * 9/16;
var buttonWidth = 180;
var buttonHeight = 40;

// Declaracao de sons
var backgroundMusic, bMusic, buttonClick, bClick, volumeSlider;

// Declaracao de imagens
var telaMenu, telaDescricao, telaCreditos, telaJogo, telaVazia;

//Variaveis e funcoes globais do jogo
var dados = [
  {palavra: "ponta negra", descricao: "Praia famosa de Natal", letters: "pontaegr"},
  {palavra: "rio branco", descricao: "Rua famosa de Natal", letters: "riobanc"},
  {palavra: "midway mall", descricao: "Maior shopping de Natal", letters: "midwayl"}
]
var palavraEscolhida, descricaoEscolhida, letrasVitoria
var chutes = []
var mostrarPalavra = []
var erros = 0

function sortearPalavra() {
  var num = parseInt(Math.random()*(dados.length - 0) + 0)
  palavraEscolhida = dados[num].palavra.toUpperCase()
  descricaoEscolhida = dados[num].descricao
  letrasVitoria = Array.from(dados[num].letters)
  
  for (let i = 0; i < palavraEscolhida.length; i++) {
    mostrarPalavra[i] = '';
  }
}

function cruzarPalavra(key) {
  let errou = true
  for (let i = 0; i < palavraEscolhida.length; i++) {
    if (palavraEscolhida[i] == key.toUpperCase()) {
      mostrarPalavra[i] = key.toUpperCase()
      errou = false
    }
  }
  if (errou) erros++
}

function verificarVitoria() {
  let ganhou = letrasVitoria.every(l => chutes.includes(l));
  if (ganhou) tela = 'vitoria'
}

// Função de pré-carregamento de recursos externos (sons, figuras, e fontes)
function preload(){
  telaMenu = loadImage('img/menu_jogodaforca.png');
  telaDescricao = loadImage('img/descricao_jogodaforca.png');
  telaCreditos = loadImage('img/creditos_jogodaforca.png');
  telaJogo = loadImage('img/game_jogodaforca.png');
  telaVazia = loadImage('img/blank_jogodaforca.png');
  bMusic = createAudio("music/bm.mp3");
  bClick = createAudio("music/click.mp3");
}

function playMusic() {
  backgroundMusic = bMusic
  backgroundMusic.autoplay(true)
  backgroundMusic.loop();
}

function playButtonClick() {
  buttonClick = bClick
  buttonClick.play()
}

// Funcao para gerar botao
function desenhaBotao(x,y,texto,func){
  push()
      stroke('#000000')
      strokeWeight(3)
      if (mouseX>=x && //hover
          mouseX<=x + buttonWidth &&
          mouseY>=y &&
          mouseY<=y + buttonHeight) {
          fill(61,112,201,100);
          if (mouseIsPressed && mouseButton==LEFT) {
            //Se o mouse estiver pressionado
            playButtonClick();
            func();
          }
      } else {
        fill(255,255,255,100);
      }
      ellipseMode(CORNER);
      ellipse(x,y,buttonWidth,buttonHeight);
    pop()
    
    push()
      textAlign(CENTER);
      textSize(25);
      text(texto, x + buttonWidth / 2, y + 27);
    pop()
}

//Inicio da implementação do jogo em si
function game() {
  
  function bonecoForca() {
    if (erros > 0) {
      push();
      circle(165, 136, 35) //cabeca
      pop()
    }
    if (erros > 1) {
      push()
      line(165, 156, 165, 220) //tronco
      pop()
    }
    if (erros > 2) {
      push()
      line(165, 160, 145, 190) //mao esquerda
      pop()
    }
    if (erros > 3) {
      push()
      line(165, 160, 185, 190) //mao direita
      pop()
    }
    if (erros > 4) {
      push()
      line(165, 220, 150, 250) //perna esquerda
      pop()
    }
    if (erros > 5) {
      push()
      line(165, 220, 180, 250) //perna direita
      textSize(17);
      translate(60,230);
      rotate( radians(270) );
      text("Ultima chance", 0, 0)
      pop()
    }
    if (erros > 6) tela = 'derrota'
  }
  
  image(telaJogo, 0, 0, canvasWidth, canvasHeight);
  // desenvolvedor()
  desenhaBotao(10, 10, 'Voltar', () => tela = 'menu')
  
  for (let i = 0; i < palavraEscolhida.length; i++) {
    if (palavraEscolhida[i] == ' ') continue //espaco entre palavras
    line(240 + 40*i, 300, 270+40*i, 300);
  }
  
  for (let i = 0; i < mostrarPalavra.length; i++) {
    push()
    textSize(16)
    textStyle(BOLD)
    text(mostrarPalavra[i], 245 + 41*i, 290)
    pop()
  }
  
  for (let y = 0; y < chutes.length; y++) {
    push()
    textSize(12)
    textStyle(BOLD)
    text(chutes[y].toString(), 15 + 10*y, 425)
    pop()
  }
  
  //dica
  push()
  stroke('#000000')
  fill(255,0,255,50);
  rect(280, 100, 400, 30)
  pop()
  
  push()
  textSize(16)
  textStyle(BOLD)
  text('Dica:', 290, 120)
  pop()
  
  push()
  textSize(16);
  textWidth(230)
  text(descricaoEscolhida, 340, 120)
  pop()
  
  bonecoForca()
  verificarVitoria()
}

// Inicio
function setup() {
  preload()
  createCanvas(canvasWidth, canvasHeight);
  volumeSlider = createSlider(0, 1, 0.0, 0.1); //trocar volume depois
  volumeSlider.position(canvasWidth - 180, 10);
  sortearPalavra();
  playMusic();
}

function draw() {
  background(220);
  
    if(tela == 'menu') {
      image(telaMenu, 0, 0, canvasWidth, canvasHeight);
      desenhaBotao(380, 100, 'Iniciar', () => tela = 'game');
      desenhaBotao(380, 150, 'Descrição', () => tela = 'description');
      desenhaBotao(380, 200, 'Créditos', () => tela = 'credits');
      backgroundMusic.volume(volumeSlider.value())
      
      //boneco
      fill('#000')
      strokeWeight(3)
      circle(165, 136, 35) //cabeca
      line(165, 156, 165, 220) //tronco
      line(165, 160, 145, 190) //mao esquerda
      line(165, 160, 185, 190) //mao direita
      line(165, 220, 150, 250) //perna esquerda
      line(165, 220, 180, 250) //perna direita
    }
    if(tela == 'game') {
      game()
    }
    if(tela == 'description') {
      image(telaDescricao, 0, 0, canvasWidth, canvasHeight);
      desenhaBotao(10, 10, 'Voltar', () => tela = 'menu')
    }
    if(tela == 'credits') {
      image(telaCreditos, 0, 0, canvasWidth, canvasHeight);
      desenhaBotao(10, 10, 'Voltar', () => tela = 'menu')
    }
    if (tela == 'vitoria') {
      image(telaVazia, 0, 0, canvasWidth, canvasHeight);
      textAlign(CENTER);
      push()
      textSize(30)
      textStyle(BOLD)
      text('Voce venceu!', canvasWidth / 2, canvasHeight / 2)
      pop()
      text('Reinicie o jogo para tentar novamente!', canvasWidth / 2, canvasHeight / 2 + 40)
      text(mostrarPalavra.join(''), canvasWidth / 2, canvasHeight - 40)
      desenhaBotao(10, 10, 'Voltar', () => tela = 'menu')
    }
    if (tela == 'derrota') {
      image(telaVazia, 0, 0, canvasWidth, canvasHeight);
      textAlign(CENTER);
      push()
      textSize(30)
      textStyle(BOLD)
      text('Game over!', canvasWidth / 2, canvasHeight / 2)
      pop()
      text('Reinicie o jogo para tentar novamente!', canvasWidth / 2, canvasHeight / 2 + 40)
      text(mostrarPalavra.join(''), canvasWidth / 2, canvasHeight - 40)
      desenhaBotao(10, 10, 'Voltar', () => tela = 'menu')
    }
}

function checkLetter(letter) {
  var aux = false;
  
  for (let i = 0; i < chutes.length; i++) {
    if (chutes[i] == letter) {
        aux = true;
        break; 
    }
  }
  
  return aux;
}

function keyTyped(){
  if (key>='a' && key<='z' && tela=='game'){    
    if (checkLetter(key) == false){
      cruzarPalavra(key)
      chutes.push(key)
    } 
    else console.log('Letra ' + key + ' ja utilizada!')
  }
}