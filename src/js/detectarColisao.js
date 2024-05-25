function detectarColisao(foguete, asteroides, ctx, frameId) {
  const fogueteX = foguete.position.x;
  const fogueteY = foguete.position.y;
  const fogueteWidth = foguete.size.width;
  const fogueteHeight = foguete.size.height;

  for (const asteroide of asteroides) {
    const asteroideX = asteroide.x;
    const asteroideY = asteroide.y;
    const asteroideRaio = asteroide.raio;

    // Calcula a distância entre o centro do asteroide e o centro do foguete
    const distanciaX = fogueteX - asteroideX;
    const distanciaY = fogueteY - asteroideY;
    const distancia = Math.sqrt(
      distanciaX * distanciaX + distanciaY * distanciaY
    );

    // Verifica se houve colisão
    if (distancia < fogueteWidth / 2 + asteroideRaio) {
      // Colisão detectada
      gameOver(ctx, frameId);
      return;
    }
  }
}
