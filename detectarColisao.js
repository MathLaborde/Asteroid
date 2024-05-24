<script>
 
  function detectarColisao() {
    // Suponha que você tenha variáveis para as posições e tamanhos dos objetos
    var x1 = obj1.x - obj1.radius;
    var y1 = obj1.y - obj1.radius;
    var largura1 = obj1.radius * 2;
    var altura1 = obj1.radius * 2;

    var x2 = obj2.x - obj2.radius;
    var y2 = obj2.y - obj2.radius;
    var largura2 = obj2.radius * 2;
    var altura2 = obj2.radius * 2;

    if (
      ((x1 + largura1) > x2 &&
      x1 < (x2 + largura2)) &&
      ((y1 + altura1) > y2 &&
      y1 < (y2 + altura2))
    ) {
      // interrompe o game loop parando a movimentação do objeto 1
      clearInterval(id_interval);
      gameOver(); // Chama a função gameOver quando uma colisão é detectada
    }
  }
</script>
