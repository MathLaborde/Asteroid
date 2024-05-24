// Script de movimento dos asteróides
var canvas = document.getElementById('minha-tela');
var context = canvas.getContext('2d');
var circulos = []; // Array para armazenar os círculos
var velocidadeX = 2; // Velocidade horizontal
var velocidadeY = 1; // Velocidade vertical

function criaCirculo() {
    var lado = Math.floor(Math.random() * 4); // Escolhe uma lateral aleatória (0-3)
    var x, y;

    // Define as coordenadas iniciais com base na lateral escolhida
    switch (lado) {
        case 0: // Topo
            x = Math.random() * canvas.width;
            y = -15; // Raio do círculo
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
            x = -15; // Raio do círculo
            y = Math.random() * canvas.height;
            break;
    }

    // Adiciona o círculo ao array
    circulos.push({ x: x, y: y });
}

// Chama a função para criar um novo círculo após 2 segundos
setTimeout(criaCirculo, 2000);

// Chama a função para criar um novo círculo a cada 5 segundos
setInterval(criaCirculo, 5000);

function moveCirculos() {
    // Limpa a tela
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Move cada círculo 
    for (var i = 0; i < circulos.length; i++) {
        var circulo = circulos[i];

        // Move o círculo
        circulo.x += velocidadeX;
        circulo.y += velocidadeY;

        // Verifica se o círculo atingiu os limites da tela
        if (circulo.x <= -15) {
            // Aparece do lado direito
            circulo.x = canvas.width + 15; // Largura do círculo
        } else if (circulo.x >= canvas.width + 15) {
            // Aparece do lado esquerdo
            circulo.x = -15; // Raio do círculo
        }
        if (circulo.y <= -15) {
            // Aparece embaixo
            circulo.y = canvas.height + 15; // Altura do círculo
        } else if (circulo.y >= canvas.height + 15) {
            // Aparece em cima
            circulo.y = -15; // Raio do círculo
        }

        // Desenha o círculo na nova posição
        context.beginPath();
        context.arc(circulo.x, circulo.y, 15, 0, Math.PI * 2);
        context.fillStyle = "white"; // Cor branca
        context.fill();
    }

    // Chama recursivamente a função 
    requestAnimationFrame(moveCirculos);
}

moveCirculos(); // Inicia
