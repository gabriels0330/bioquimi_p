const perguntas = [
    {
        pergunta: "Qual é o principal gás de efeito estufa que contribui para o aquecimento global?",
        opcoes: ["Oxigênio", "Nitrogênio", "Dióxido de carbono (CO2)", "Hidrogênio"],
        resposta: "c",
        resolucao: "O dióxido de carbono (CO2) é o principal gás de efeito estufa responsável pelo aquecimento global."
    }
];

let perguntaAtual = 0;

function exibirPergunta() {
    const perguntaDiv = document.getElementById("pergunta");
    const opcoesDiv = document.getElementById("opcoes");

    perguntaDiv.textContent = perguntas[perguntaAtual].pergunta;
    opcoesDiv.innerHTML = "";

    for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "opcao";
        input.id = "opcao" + i;
        input.classList.add("opcao");
        input.value = String.fromCharCode(97 + i); // a, b, c, d
        opcoesDiv.appendChild(input);

        const label = document.createElement("label");
        label.htmlFor = "opcao" + i;
        label.textContent = perguntas[perguntaAtual].opcoes[i];
        opcoesDiv.appendChild(label);

        opcoesDiv.appendChild(document.createElement("br"));
    }

    document.getElementById("resolucao").textContent = "";
}

function verificarResposta() {
    const respostaSelecionada = document.querySelector('.opcao:checked');
    const respostaCorreta = perguntas[perguntaAtual].resposta;

    if (respostaSelecionada) { // Verifica se alguma opção foi selecionada
        if (respostaSelecionada.value === respostaCorreta) {
            document.getElementById("resolucao").textContent = perguntas[perguntaAtual].resolucao;
            respostaSelecionada.nextElementSibling.style.backgroundColor = "green"; // Aplica cor verde à opção correta
        } else {
            document.getElementById("resolucao").textContent = "Resposta incorreta. Tente novamente.";
            respostaSelecionada.nextElementSibling.style.backgroundColor = "red"; // Aplica cor vermelha à opção incorreta
        }
    } else {
        alert("Selecione uma opção antes de verificar.");
    }
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        alert("Parabéns, você concluiu o jogo!");
    }
}

// Exibe a primeira pergunta ao carregar a página
exibirPergunta();
