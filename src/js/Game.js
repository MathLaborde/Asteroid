import { RocketMoves } from "./RocketMoves.js";

const canvas = document.getElementById("minha-tela");
const ctx = canvas.getContext("2d");
let frameId = {
  id: 1,
};

// Debugger Cordenadas ao passar o mouse
// const coordsDisplay = document.getElementById("coords");

// canvas.addEventListener("mousemove", (event) => {
//   const rect = canvas.getBoundingClientRect();
//   const x = Math.floor(event.clientX - rect.left);
//   const y = Math.floor(event.clientY - rect.top);
//   coordsDisplay.textContent = `Coordenadas: (X: ${x}, Y: ${y})`;
// });

const Pontos = {
  intervalo: function () {
    setInterval((e) => {
      this.placar += 1;
    }, 1000);
  },
  placar: 0,
  penalidade: true,
  timePenalidade: function () {
    let time;
    time = setInterval((e) => {
      this.penalidade = true;
      clearInterval(time);
    }, 10000);
  },
  aplicaPenalidade: function () {
    if (this.penalidade) {
      this.penalidade = false;
      this.timePenalidade();
      this.placar = this.placar - 10 <= 0 ? 0 : this.placar - 10;
    }
  },
};

Pontos.intervalo();
criaAsteroide("pequeno");
ctx.font = "20px cursive";

RocketMoves.start({ ctx });

if (frameId.id) {
  frameId.id = requestAnimationFrame(GameLoop);
}

function GameLoop() {
  // Debugger Cordenadas do foguete
  // document.getElementById("cordenadas").innerHTML = `(${Math.floor(
  //   RocketMoves.position.x
  // )} , ${Math.floor(RocketMoves.position.y)})`;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  RocketMoves.update();

  if (RocketMoves.inativo) Pontos.aplicaPenalidade();

  detectarColisao(RocketMoves, asteroids, ctx, frameId);

  moveAsteroides({ ctx });

  mostraPontos(Pontos.placar, ctx);

  if (frameId.id) {
    frameId.id = requestAnimationFrame(GameLoop);
  }
}
