var canvas = document.getElementById('minha-tela');
var context = canvas.getContext('2d');
var asteroidPequenoImage = new Image();
var asteroidGrandeImage = new Image();
asteroidPequenoImage.src = './img/asteroide_pequeno.png'; // Caminho da imagem do asteroide pequeno
asteroidGrandeImage.src = './img/asteroide_grande.png'; // Caminho da imagem do asteroide grande
var asteroids = []; // Array para armazenar os asteroides
var velocidadeX = 2; // Velocidade horizontal
var velocidadeY = 1; // Velocidade vertical

function criaAsteroide(tamanho, escala) {
    var lado = Math.floor(Math.random() * 4); // Escolhe uma lateral aleatória (0-3)
    var x, y, image, width, height;

    if (escala === 'grande') {
        width = 40; // Tamanho do asteroide grande
        height = 40; // Tamanho do asteroide grande
        image = asteroidGrandeImage;
    } else {
        width = 20; // Tamanho do asteroide pequeno
        height = 20; // Tamanho do asteroide pequeno
        image = asteroidPequenoImage;
    }

    // Define as coordenadas iniciais com base na lateral escolhida
    switch (lado) {
        case 0: // Topo
            x = Math.random() * canvas.width;
            y = -15 - height; // Ajuste para que os asteroides não apareçam de repente na tela
            break;
        case 1: // Direita
            x = canvas.width + 15; // Largura do círculo
            y = Math.random() * canvas.height;
            break;
        case 2: // Baixo
            x = Math.random() * canvas.width;
            y = canvas.height + 15; // Altura do círculo
            break;
        case 3: // Esquerda
            x = -15 - width; // Ajuste para que os asteroides não apareçam de repente na tela
            y = Math.random() * canvas.height;
            break;
    }

    // Adiciona o asteroide ao array
    asteroids.push({ x: x, y: y, width: width, height: height, image: image });
}

// Chama a função para criar um novo asteroide após 2 segundos
setTimeout(function() {
    criaAsteroide(asteroidPequenoImage, 'pequeno');
}, 2000);

// Chama a função para criar um novo asteroide a cada 5 segundos
setInterval(function() {
    criaAsteroide(asteroidPequenoImage, 'pequeno');
}, 5000);

// Chama a função para criar um novo asteroide a cada 10 segundos com o asteroide grande
setInterval(function() {
    criaAsteroide(asteroidGrandeImage, 'grande');
}, 10000);

function moveAsteroides() {
    // Limpa a tela
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Move cada asteroide 
    for (var i = 0; i < asteroids.length; i++) {
        var asteroide = asteroids[i];

        // Move o asteroide
        asteroide.x += velocidadeX;
        asteroide.y += velocidadeY;

        // Verifica se o asteroide atingiu os limites da tela
        if (asteroide.x <= -asteroide.width) {
            // Aparece do lado direito
            asteroide.x = canvas.width + 15; // Largura do círculo
        } else if (asteroide.x >= canvas.width + 15) {
            // Aparece do lado esquerdo
            asteroide.x = -asteroide.width; // Raio do círculo
        }
        if (asteroide.y <= -asteroide.height) {
            // Aparece embaixo
            asteroide.y = canvas.height + 15; // Altura do círculo
        } else if (asteroide.y >= canvas.height + 15) {
            // Aparece em cima
            asteroide.y = -asteroide.height; // Raio do círculo
        }

        // Desenha o asteroide na nova posição
        context.drawImage(asteroide.image, asteroide.x, asteroide.y, asteroide.width, asteroide.height);
    }

    // Chama recursivamente a função 
    requestAnimationFrame(moveAsteroides);
}

moveAsteroides(); // Inicia
