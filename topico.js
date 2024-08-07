function selectTheme(theme) {
    localStorage.setItem('selectedTheme', theme);
     window.location.href = 'level.html';
}

function navigateTo(page) {
  window.location.href = page;
}
