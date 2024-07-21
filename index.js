function checkAnswer() {
    const options = document.getElementsByName('answer');
    let selectedOption;
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    if (selectedOption === 'C') {
        alert('Resposta correta!');
    } else {
        alert('Resposta errada! Tente novamente.');
    }
}