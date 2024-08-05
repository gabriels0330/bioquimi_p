document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cards');
    const nextButton = document.getElementById('next');
    const explain = document.getElementById('explica');
    const sideBottom = document.getElementsByClassName('check');
    const bolaContainer = document.getElementById('bolaContainer');
    const audioCorrect = document.getElementById('audioCorrect');
    const audioIncorrect = document.getElementById('audioIncorrect');

    let selectedCard = null;
    let questionChecked = false; // Estado para verificar se a pergunta já foi conferida

    // Verifica se a página foi recarregada
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        // Se a página foi recarregada, zera os contadores e redireciona para a primeira página
        localStorage.removeItem('correctCount');
        localStorage.removeItem('totalAnswered');
        window.location.href = 'efeito_estufa_quiz_1_f.html';
    }

    // Recupera os valores de acertos e perguntas respondidas do localStorage ou inicia com 0
    let correctCount = parseInt(localStorage.getItem('correctCount')) || 0;
    let totalAnswered = parseInt(localStorage.getItem('totalAnswered')) || 0;

    // Atualiza os elementos de contagem com os valores recuperados
    const correctCountElement = document.getElementById('correctCount');
    const totalAnsweredElement = document.getElementById('totalAnswered');
    correctCountElement.textContent = correctCount;
    totalAnsweredElement.textContent = totalAnswered;

    // Define o número da questão, que será usado para redirecionar para a próxima página
    let questionNumber = 2; // Mude para o número da próxima questão correspondente

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (questionChecked) return; // Não permite alterar a seleção após a conferência

            if (selectedCard) {
                selectedCard.classList.remove('selected');
            }
            card.classList.add('selected');
            selectedCard = card;
            nextButton.disabled = false;
            nextButton.classList.add('enabled');
            nextButton.style.backgroundColor = 'rgb(51, 167, 51)';
            nextButton.style.borderBottom = '5px solid rgb(0, 51, 0)';
            nextButton.style.cursor = 'pointer';
        });
    });

    nextButton.addEventListener('click', () => {
        if (!selectedCard) return;
        if (questionChecked) {
            // Se a pergunta já foi conferida, redireciona para a próxima página
            window.location.href = `e_f_q_${questionNumber}_f.html`;
            return;
        }

        questionChecked = true; // Marca a pergunta como conferida

        // Incrementa o contador de questões respondidas
        totalAnswered++;
        totalAnsweredElement.textContent = totalAnswered;
        localStorage.setItem('totalAnswered', totalAnswered);

        explain.style.display = "block";

        const isCorrect = selectedCard.getAttribute('data-answer') === 'correct';
        if (isCorrect) {
            selectedCard.classList.add('correct');
            // Incrementa o contador de acertos
            correctCount++;
            correctCountElement.textContent = correctCount;
            localStorage.setItem('correctCount', correctCount);

            nextButton.style.backgroundColor = 'rgb(51, 167, 51)';
            nextButton.style.borderBottom = '5px solid rgb(0, 51, 0)';

            // Adiciona a bola ao container
            bolaContainer.innerHTML = `
                <div class="bola">
                    <div class="checked">✓</div>
                </div>
            `;
            // Toca o áudio correto
            audioCorrect.play();
        } else {
            selectedCard.classList.add('incorrect');
            nextButton.style.backgroundColor = 'red';
            nextButton.style.borderBottom = '5px solid rgb(164, 3, 3)';

            // Adiciona o X ao container
            bolaContainer.innerHTML = `
                <div class="erro">
                    <div class="error-mark">✗</div>
                </div>
            `;
            // Toca o áudio incorreto
            audioIncorrect.play();
        }

        cards.forEach(card => {
            if (card !== selectedCard) {
                if (card.getAttribute('data-answer') === 'correct') {
                    card.classList.add('correct');
                } else {
                    card.classList.add('incorrect');
                }
            }
            card.style.pointerEvents = 'none';
        });

        // Adiciona a classe 'correct' ou 'incorrect' ao elemento .check
        Array.from(sideBottom).forEach(check => {
            check.classList.add(isCorrect ? 'correct' : 'incorrect');
        });

        nextButton.textContent = 'PRÓXIMO';
    });
});
