let frameId = {
  id: 1,
};

const RocketMoves = Rocket();

const Pontos = {
  intervalo: function () {
    setInterval(() => {
      this.placar += 1;
    }, 1000);
  },
  placar: 0,
  aplicaPenalidade: function () {
    this.placar = this.placar - 10 <= 0 ? 0 : this.placar - 10;
  },
};

Pontos.intervalo();
ctx.font = "20px cursive";

RocketMoves.start({ ctx });

if (frameId.id) {
  frameId.id = requestAnimationFrame(GameLoop);
}

asteroideInicial();

let lastMovementTime = Date.now();
let lastPenaltyTime = 0;

function GameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  RocketMoves.update();

  detectarColisao(RocketMoves, asteroids, ctx, frameId);

  mostraPontos(Pontos.placar, ctx);

  moveAsteroides({ ctx });

  const currentTime = Date.now();

  if (RocketMoves.estaMovendo) {
    lastMovementTime = currentTime;
  } else if (currentTime - lastMovementTime >= 3000) {
    if (currentTime - lastPenaltyTime >= 10000) {
      Pontos.aplicaPenalidade();
      lastPenaltyTime = currentTime;
    }
  }

  if (frameId.id) {
    frameId.id = requestAnimationFrame(GameLoop);
  }
}
