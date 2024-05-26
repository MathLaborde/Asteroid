function detectarColisao(foguete, asteroides, ctx, frameId) {
  const fogueteX = Math.floor(foguete.position.x);
  const fogueteY = Math.floor(foguete.position.y);

  for (const asteroide of asteroides) {
    const asteroideX = Math.floor(asteroide.x + asteroide.raio / 2);
    const asteroideY = Math.floor(asteroide.y + asteroide.raio / 2);

    const dx = Math.abs(Math.floor(fogueteX - asteroideX));
    const dy = Math.abs(Math.floor(fogueteY - asteroideY));

    const dxx = dx * dx;
    const dyy = dy * dy;

    const math = Math.sqrt(Math.abs(dxx + dyy));

    if (math < (asteroide.raio + foguete.size.width) / 2.5) {
      gameOver(ctx, frameId);
      return;
    }
  }
}
