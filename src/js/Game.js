import { RocketMoves } from "./RocketMoves.js";

const canvas = document.getElementById("minha-tela");
const ctx = canvas.getContext("2d");
let frameId = {
  id: 1,
};

var tempoInicial = new Date().getTime();
var intervalo = 0,
  tempoAtual;
ctx.font = "20px cursive";

RocketMoves.start({ ctx });
if (frameId.id) {
  frameId.id = requestAnimationFrame(GameLoop);
}

function GameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  RocketMoves.update();
  detectarColisao(RocketMoves, asteroids, ctx, frameId);

  moveAsteroides({ ctx });

  tempoAtual = new Date().getTime();
  intervalo = Math.floor((tempoAtual - tempoInicial) / 1000 )
  pontos(intervalo, ctx);
  // ctx.fillText("LEVEL: " + level, 15, canvas.height - 10);
  inatividade(RocketMoves.ultimoMove, intervalo);

  if (frameId.id) {
    frameId.id = requestAnimationFrame(GameLoop);
  }
}
