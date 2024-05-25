function detectarColisao(foguete, asteroides, ctx, frameId) {
  for (const asteroide of asteroides) {
    var distX = Math.abs(
      asteroide.x - foguete.position.x - foguete.size.width / 2
    );
    var distY = Math.abs(
      asteroide.y - foguete.position.y - foguete.size.height / 2
    );

    if (distX > foguete.size.width / 2 + asteroide.radius) {
      gameOver(ctx, frameId);
      return;
    }
    if (distY > foguete.size.height / 2 + asteroide.radius) {
      gameOver(ctx, frameId);
      return;
    }

    if (distX <= foguete.size.width / 2 && distY <= foguete.size.height / 2) {
      gameOver(ctx, frameId);
      return;
    }

    var dx = distX - foguete.size.width / 2;
    var dy = distY - foguete.size.height / 2;
    if (dx * dx + dy * dy <= asteroide.radius * asteroide.radius) {
      gameOver(ctx, frameId);
      return;
    }
  }
}
