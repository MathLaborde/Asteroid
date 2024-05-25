export const RocketMoves = {
  //#region Config Variable
  size: { width: 50, height: 50 },
  position: { x: 0, y: 0 },
  speed: 0,
  angle: 0,
  turnRate: 2,
  imagem: new Image(),
  inativo: true,
  timerTimeout: null,
  //#endregion

  //#region Function Start
  start: function ({ ctx }) {
    this.ctx = ctx;

    this.position.x = this.ctx.canvas.width / 2;
    this.position.y = this.ctx.canvas.height / 2;

    this.imagem.src = "./src/img/rocket.png";

    this.listen();
  },
  //#endregion

  //#region Listening Events
  listen: function () {
    let keysPressed = {},
      speedUpInterval = null,
      speedDownInterval = null,
      turnLeftInterval = null,
      turnRightInterval = null;

    addEventListener("keydown", (e) => {
      keysPressed[e.code] = true;

      if (
        speedUpInterval == null &&
        (keysPressed["KeyW"] || keysPressed["ArrowUp"])
      ) {
        speedUpInterval = setInterval((e) => {
          clearTimeout(this.timerTimeout);

          this.inativo = false;

          this.speed += 0.02;
          if (this.speed > 1.5) {
            this.speed = 1.5;
            clearInterval(speedUpInterval);
            speedUpInterval = null;
          }
        }, 10);
      }

      if (
        speedDownInterval == null &&
        (keysPressed["KeyS"] || keysPressed["ArrowDown"])
      ) {
        speedDownInterval = setInterval((e) => {
          this.speed -= 0.02;
          if (this.speed <= 0) {
            this.speed = 0;

            this.timerTimeout = setTimeout(() => {
              this.inativo = true;
            }, 3000);

            clearInterval(speedDownInterval);
            speedDownInterval = null;
          }
        }, 10);
      }

      if (
        turnLeftInterval == null &&
        (keysPressed["KeyA"] || keysPressed["ArrowLeft"])
      ) {
        turnLeftInterval = setInterval((e) => {
          this.angle -= this.turnRate;
        }, 10);
      }

      if (
        turnRightInterval == null &&
        (keysPressed["KeyD"] || keysPressed["ArrowRight"])
      ) {
        turnRightInterval = setInterval((e) => {
          this.angle += this.turnRate;
        }, 10);
      }
    });

    addEventListener("keyup", (e) => {
      keysPressed[e.code] = false;

      if (!keysPressed["KeyW"] || !keysPressed["ArrowUp"]) {
        clearInterval(speedUpInterval);
        speedUpInterval = null;
      }

      if (!keysPressed["KeyS"] || !keysPressed["ArrowDown"]) {
        clearInterval(speedDownInterval);
        speedDownInterval = null;
      }

      if (!keysPressed["KeyA"] || !keysPressed["ArrowLeft"]) {
        clearInterval(turnLeftInterval);
        turnLeftInterval = null;
      }

      if (!keysPressed["KeyD"] || !keysPressed["ArrowRight"]) {
        clearInterval(turnRightInterval);
        turnRightInterval = null;
      }
    });
  },
  //#endregion

  //#region Update Function
  update: function () {
    const rad = this.angle * (Math.PI / 180);

    this.position.x += Math.sin(rad) * this.speed;
    this.position.y -= Math.cos(rad) * this.speed;

    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.rotate(rad);
    this.ctx.drawImage(
      this.imagem,
      -this.size.width / 2,
      -this.size.height / 2,
      this.size.width,
      this.size.height
    );

    //#region Hitbox Foguete

    this.ctx.strokeStyle = "red";
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(
      -this.size.width / 2,
      -this.size.height / 2,
      this.size.width,
      this.size.height
    );

    //#region

    this.ctx.restore();

    if (this.position.x < 0) {
      this.position.x = this.ctx.canvas.width;
    } else if (this.position.x > this.ctx.canvas.width) {
      this.position.x = 0;
    }

    if (this.position.y < 0) {
      this.position.y = this.ctx.canvas.height;
    } else if (this.position.y > this.ctx.canvas.height) {
      this.position.y = 0;
    }
  },

  //#endregion
};
