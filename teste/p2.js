function startChallenge() {
    window.location.href = 'question.html';
}

function checkAnswer(answer) {
    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('next');
    
    if (answer === 'metano') {
        feedback.innerHTML = `<p>Acertou!</p>
            <p>Segundo a Organização das Nações Unidas (ONU), o metano ocupa em segundo lugar, dentre os três mais importantes gases causadores do efeito estufa (CO2, CH4 e N2O). A dificuldade de medição das emissões dos oceanos pode conduzir a uma subestimativa nas emissões globais desses gases.</p>`;
        nextButton.style.display = 'inline-block';
    } else {
        feedback.innerHTML = `<p>Resposta errada. Tente novamente!</p>`;
    }
}

function nextQuestion() {
    // Lógica para ir para a próxima questão
    alert('Próxima questão!');
}
