const canvas2 = document.getElementById("minha-tela");
const ctx = canvas2.getContext("2d");

function pontos(x, ctx) {
  ctx.fillStyle = "#FFF"
  ctx.fillText("PONTOS: " + x, ctx.canvas.width - 125, ctx.canvas.height - 10);
}

// Chamar a função de Colisão Alessandra

function gameOver(ctx, frame) {
  ctx.font = "30px";
  ctx.fillStyle = "Red";
  ctx.fillText("GAME OVER", canvas.width / 2 - 100, canvas.height / 2);
  cancelAnimationFrame(frame.id);
  frame.id = null;
  return;
}

// Inicio Lógica Inatividade
// let ultimoMovimento = Date.now();

function inatividade(ultimoMovimento, intervalo) {
  tempoAgora = Date.now();
  limite = 3000; // 3 segundos

  if (ultimoMovimento && tempoAgora - ultimoMovimento > limite) {
    penalidade(intervalo);
  }
}

function penalidade(intervalo) {
  const pontosPenalidade = 10;
  intervalo -= pontosPenalidade;

  if (intervalo < 0) {
    intervalo = 0;
  }
}
