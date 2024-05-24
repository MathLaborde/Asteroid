var canvas = document.getElementById("minha-tela");
var context = canvas.getContext("2d");
context.font = "20px cursive";

//obtendo o valor do momento em que o jogo é iniciado
var tempoInicial = new Date().getTime();
var intervalo = 0, tempoAtual;
requestAnimationFrame(gameloop);


function gameloop() {
    tempoAtual = new Date().getTime();
    // intervalo += Math.floor((tempoAtual - tempoInicial) / 1000);
    intervalo += 0.018
    pontos(Math.floor(intervalo));
    if (intervalo < 40) requestAnimationFrame(gameloop);
    else {
        gameOver()
    }

    context.fillText("LEVEL: " + level, 15, canvas.height - 10)
}

function pontos(x) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText('PONTOS: ' + x, canvas.width - 125, canvas.height - 10);
}

// Chamar a função de Colisão Alessandra


function gameOver() {
    context.font = "30px Lucida Handwriting";
    context.fillStyle = "Red";
    context.fillText("GAME OVER",canvas.width/2-100,canvas.height/2);
}

// Inicio Lógica de Aumento de Velocidade do Asteroide
let velocidadeAsteroide = 1;
const aumentarVelocidade = 0.2;
let level = 1;

function aumentarVelocidadeAsteroide() {
    velocidadeAsteroide += aumentarVelocidade;
    level += 1
    console.log(velocidadeAsteroide)
    // context.fillText("LEVEL: " + level, 20, canvas.height - 10)
}

setInterval(aumentarVelocidadeAsteroide, 20000);
// Fim Lógica de Aumento de Velocidade do Asteroide


// Inicio Lógica Inatividade
let ultimoMovimento = Date.now();

function inatividade() {
    tempoAgora = Date.now()
    limite = 3000 // 3 segundos

    if (tempoAgora - ultimoMovimento > limite) {
        penalidade();
    }
}

function penalidade() {
    const pontosPenalidade = 10
    intervalo -= pontosPenalidade

    if (intervalo < 0) {
        intervalo = 0
    }
    console.log(intervalo)
    context.fillText('PONTOS: ' + intervalo, canvas.width - 150, canvas.height - 10);
}