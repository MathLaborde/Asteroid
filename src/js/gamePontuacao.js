function pontos(x, ctx) {
  ctx.fillText("PONTOS: " + x, ctx.canvas.width - 125, ctx.canvas.height - 10);
}

// Chamar a função de Colisão Alessandra

function gameOver(ctx, frame) {
  ctx.font = "30px Lucida Handwriting";
  ctx.fillStyle = "Red";
  ctx.fillText("GAME OVER", canvas.width / 2 - 100, canvas.height / 2);
  cancelAnimationFrame(frame.id);
  frame.id = null;
  return;
}

// Inicio Lógica de Aumento de Velocidade do Asteroide
let velocidadeAsteroide = 1;
const aumentarVelocidade = 0.2;
let level = 1;

function aumentarVelocidadeAsteroide() {
  velocidadeAsteroide += aumentarVelocidade;
  level += 1;
  console.log(velocidadeAsteroide);
  // ctx.fillText("LEVEL: " + level, 20, canvas.height - 10)
}

// Fim Lógica de Aumento de Velocidade do Asteroide

// Inicio Lógica Inatividade
let ultimoMovimento = Date.now();

function inatividade() {
  tempoAgora = Date.now();
  limite = 3000; // 3 segundos

  if (tempoAgora - ultimoMovimento > limite) {
    penalidade();
  }
}

function penalidade() {
  const pontosPenalidade = 10;
  intervalo -= pontosPenalidade;

  if (intervalo < 0) {
    intervalo = 0;
  }
  console.log(intervalo);
  ctx.fillText("PONTOS: " + intervalo, canvas.width - 150, canvas.height - 10);
}
