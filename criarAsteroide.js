
 
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        const asteroides = [];
        const ASTEROIDE_PEQUENO = 20;
        const ASTEROIDE_GRANDE = 40;

        // Carregar imagens
        const imgPequeno = new Image();
        const imgGrande = new Image();
        imgPequeno.src = 'imagem/asteroide_pequeno.png';
        imgGrande.src = 'imagem/asteroide_grande.png';

        function criarAsteroide() {
            const tipo = Math.random() < 0.91 ? ASTEROIDE_PEQUENO : ASTEROIDE_GRANDE;
            const x = Math.random() * (canvas.width - tipo);
            const y = -tipo;
            const velocidade = Math.random() * 2 + 1; // Velocidade entre 1 e 3

            asteroides.push({ x, y, tipo, velocidade });
        }








        
        function atualizarAsteroides() {
            for (let i = 0; i < asteroides.length; i++) {
                asteroides[i].y += asteroides[i].velocidade;

                // Remover asteroides que saíram da tela
                if (asteroides[i].y > canvas.height) {
                    asteroides.splice(i, 1);
                    i--;
                }
            }
        }

        function desenharAsteroides() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const asteroide of asteroides) {
                if (asteroide.tipo === ASTEROIDE_PEQUENO) {
                    ctx.drawImage(imgPequeno, asteroide.x, asteroide.y, ASTEROIDE_PEQUENO, ASTEROIDE_PEQUENO);
                } else {
                    ctx.drawImage(imgGrande, asteroide.x, asteroide.y, ASTEROIDE_GRANDE, ASTEROIDE_GRANDE);
                }
            }
        }

        function gameLoop() {
            atualizarAsteroides();
            desenharAsteroides();
            requestAnimationFrame(gameLoop);
        }

        // Esperar as imagens carregarem antes de iniciar o jogo
        imgPequeno.onload = imgGrande.onload = function() {
            setInterval(criarAsteroide, 5000); // Criar um novo asteroide a cada 5 segundos
            gameLoop(); // Iniciar o loop do jogo
        };
  