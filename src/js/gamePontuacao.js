const canvas2 = document.getElementById("minha-tela");
const ctx = canvas2.getContext("2d");

function mostraPontos(x, ctx) {
  ctx.fillStyle = "#FFF";
  const numeroStr = Math.abs(parseInt(x)).toString();
  const tamanho = numeroStr.length * 10 + 110;
  ctx.fillText(
    "PONTOS: " + x,
    ctx.canvas.width - tamanho,
    ctx.canvas.height - 10
  );
}

// Chamada pela função de Colisão - Alessandra, Arquivo detectarColisao.js
function gameOver(ctx, frame) {
  ctx.font = "30px";
  // ctx.fillStyle = "Red";
  ctx.fillText("GAME OVER", canvas2.width / 2 - 50, canvas2.height / 2);
  cancelAnimationFrame(frame.id);
  frame.id = null;
  return;
}
