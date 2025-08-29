// game.js

// Importa dados e elementos da UI necessários
import { BIOLOGY_PAIRS, CLASS_STUDENTS } from './data.js';

// Elementos da UI
const memoryBoard = document.getElementById('memory-board');
const streakCounter = document.getElementById('streak-counter');
const playerScoreElement = document.getElementById('player-score');
const opponentScoreElement = document.getElementById('opponent-score');
const gameSidebar = document.getElementById('game-sidebar');
const battleClassSidebar = document.getElementById('battle-class-sidebar');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const finalPlayerScoreElement = document.getElementById('final-player-score');
const finalOpponentScoreElement = document.getElementById('final-opponent-score');
const resultTitle = document.getElementById('result-title');
const studentListContainer = document.getElementById('student-list');
const restartButton = document.getElementById('btn-restart');

// Constantes e Variáveis de Estado
let streak = 0;
let playerScore = 0;
let opponentScore = 0;
let flippedCards = [];
let matchedPairs = 0;
let boardLocked = false;
let isPlayerTurn = true;
let currentGameMode = null;
let currentStudentIndex = 0;

export function startGame(mode) {
    currentGameMode = mode;
    matchedPairs = 0;
    boardLocked = false;

    if (mode === 'versus') {
        playerScore = 0;
        opponentScore = 0;
        streak = 0;
        isPlayerTurn = true;
        playerScoreElement.textContent = playerScore;
        opponentScoreElement.textContent = opponentScore;
        streakCounter.innerHTML = `🔥 ${streak}`;
        gameSidebar.classList.remove('hidden');
        battleClassSidebar.classList.add('hidden');
    } else if (mode === 'battle-class') {
        CLASS_STUDENTS.forEach(s => s.score = 0);
        currentStudentIndex = 0;
        gameSidebar.classList.add('hidden');
        battleClassSidebar.classList.remove('hidden');
        renderStudentList();
    }
    
    // Oculta tela de resultados e mostra a do quiz
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    createMemoryBoard();
}

function createMemoryBoard() {
    // ... (lógica existente para criar o tabuleiro)
}

function flipCard(cardElement) {
    // ... (lógica existente para virar a carta)
}

function handleMatch() {
    // ... (lógica existente para o acerto)
}

function handleMismatch() {
    // ... (lógica existente para o erro)
}

function opponentTurn() {
    // ... (lógica existente da IA do oponente)
}

function resetTurn(playerContinues) {
    // ... (lógica existente para resetar o turno)
}

export function showResults() {
    // ... (lógica existente para mostrar resultados)
}

// Event listener para o botão de reiniciar
if (restartButton) {
    restartButton.addEventListener('click', () => {
        if(currentGameMode === 'versus') {
            window.location.href = 'student-home.html';
        } else {
            window.location.href = 'professor-home.html';
        }
    });
}