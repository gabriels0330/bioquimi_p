function selectTheme(theme) {
    localStorage.setItem('selectedTheme', theme);
    window.location.href = 'level.html';
}

function selectLevel(level) {
    const theme = localStorage.getItem('selectedTheme');
    if (theme) {
        // Define o caminho da pasta e o padrão do nome dos arquivos
        const folderPath = `questions_${level}_${theme}/`;
        const fileName = `${theme}_quiz_1_${level}.html`;
        window.location.href = folderPath + fileName;
    } else {
        alert('Por favor, selecione um tema primeiro.');
    }
}

function navigateTo(page) {
    window.location.href = page;
}