const canvas2 = document.getElementById("minha-tela");
const ctx = canvas2.getContext("2d");

function mostraPontos(x, ctx) {
  ctx.fillStyle = "#FFF";
  ctx.fillText("PONTOS: " + x, ctx.canvas.width - 150, ctx.canvas.height - 10);
}

// Chamar a função de Colisão Alessandra

function gameOver(ctx, frame) {
  ctx.font = "30px";
  ctx.fillStyle = "Red";
  ctx.fillText("GAME OVER", canvas2.width / 2 - 100, canvas2.height / 2);
  cancelAnimationFrame(frame.id);
  frame.id = null;
  return;
}
