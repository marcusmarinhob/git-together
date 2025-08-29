// main.js

import { showLoginScreen } from './navigation.js';
import { startGame, showResults } from './game.js';
import { renderStudentList } from './professor.js';

// Inicialização dos Event Listeners (exclusivos da página index/login)
document.getElementById('welcome-professor-btn').addEventListener('click', () => showLoginScreen('professor'));
document.getElementById('welcome-aluno-btn').addEventListener('click', () => showLoginScreen('aluno'));

// Event listeners que podem ser globais
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar event listeners de navegação aqui para garantir que os elementos já existem
    const startVersusButton = document.getElementById('start-versus-btn');
    if (startVersusButton) {
        startVersusButton.addEventListener('click', () => startGame('versus'));
    }

    const startBattleClassButton = document.getElementById('start-battle-class-btn');
    if (startBattleClassButton) {
        startBattleClassButton.addEventListener('click', () => startGame('battle-class'));
    }

    const practiceButtons = document.querySelectorAll('.btn-practice');
    practiceButtons.forEach(button => button.addEventListener('click', () => startGame('versus')));

    // Lógica para abrir/fechar painéis
    const missionsButton = document.getElementById('missions-btn');
    const missionsPanel = document.getElementById('missions-panel');
    if (missionsButton) {
        missionsButton.addEventListener('click', (e) => { e.stopPropagation(); missionsPanel.classList.toggle('visible'); });
    }

    const modesButton = document.getElementById('modes-btn');
    const gameModesPanel = document.getElementById('game-modes-panel');
    if (modesButton) {
        modesButton.addEventListener('click', (e) => { e.stopPropagation(); gameModesPanel.classList.toggle('visible'); });
    }

    document.addEventListener('click', (e) => {
        if (missionsPanel && !missionsButton.contains(e.target) && !missionsPanel.contains(e.target)) {
            missionsPanel.classList.remove('visible');
        }
        if (gameModesPanel && !modesButton.contains(e.target) && !gameModesPanel.contains(e.target)) {
            gameModesPanel.classList.remove('visible');
        }
    });

    // Event listeners para os botões de voltar
    const backToMenuButton = document.getElementById('back-to-menu-btn');
    if (backToMenuButton) {
        backToMenuButton.addEventListener('click', () => window.location.href = 'student-home.html');
    }

    const backToMenuFromDeckButton = document.getElementById('back-to-menu-from-deck');
    if (backToMenuFromDeckButton) {
        backToMenuFromDeckButton.addEventListener('click', () => window.location.href = 'student-home.html');
    }
});