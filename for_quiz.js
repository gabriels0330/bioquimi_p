document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cards');
    const nextButton = document.getElementById('next');
    const explain = document.getElementById('explica')
    const sideBottom = document.getElementsByClassName('check');
    const bolaContainer = document.getElementById('bolaContainer');
    const audioCorrect = document.getElementById('audioCorrect');
    const audioIncorrect = document.getElementById('audioIncorrect');
    let selectedCard = null;
    let questionChecked = false;
    
    // Variáveis para registrar acertos e questões respondidas
    let correctCount = 0;
    let totalAnswered = 0;

    // Elementos para exibir os resultados
    const correctCountElement = document.getElementById('correctCount');
    const totalAnsweredElement = document.getElementById('totalAnswered');

    cards.forEach(card => {
        card.addEventListener('click', () => {
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

        if (!questionChecked) {
            // Incrementa o contador de questões respondidas
            totalAnswered++;
            totalAnsweredElement.textContent = totalAnswered;
            explain.style.display = "block";

            const isCorrect = selectedCard.getAttribute('data-answer') === 'correct';
            if (isCorrect) {
                selectedCard.classList.add('correct');
                // Incrementa o contador de acertos
                correctCount++;
                correctCountElement.textContent = correctCount;
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
            questionChecked = true;
        } else {
            // Redireciona para a página bioquimi.html
            window.location.href = 'efeito_estufa_quiz_2_f.html';
        }
    });
});