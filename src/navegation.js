// navigation.js

export function showScreen(screenId) {
    // Com a divisão em arquivos HTML, essa função se torna redundante.
    // O ideal é usar a navegação nativa do navegador (window.location.href).
    // O código abaixo serve para simular a navegação para os fins do exercício,
    // mas a abordagem recomendada é a navegação por links.
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(screen => {
        screen.classList.remove('active');
    });
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

export function showLoginScreen(role) {
    // Em vez de mostrar a tela, redirecionamos para o arquivo de login
    window.location.href = `login.html?role=${role}`;
}