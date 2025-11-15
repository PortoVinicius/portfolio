/* ================================
   SISTEMA DE COMENTÁRIOS (DEPOIMENTOS)
   ================================ */

function addComment() {
    const comment = document.getElementById("commentInput").value;

    if (comment.trim() === "") {
        alert("Digite algo no comentário.");
        return;
    }

    // Salva o depoimento para usar na outra página
    localStorage.setItem("ultimoDepoimento", comment);

    // Navega para a página do GIF
    window.location.href = "depoimento.html";
}



/* ================================
   JOGO DA VELHA (TIC TAC TOE)
   ================================ */

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

function makeMove(index) {
    if (board[index] === "" && !gameOver) {
        board[index] = currentPlayer;

        const cells = document.getElementsByClassName("cell");
        if (cells[index]) {
            cells[index].textContent = currentPlayer;
        }

        // Verifica vencedor
        if (checkWinner()) {
            document.getElementById("gameStatus").textContent =
                `${currentPlayer} venceu! 🎉`;
            gameOver = true;
            return;
        }

        // Verifica empate
        if (!board.includes("")) {
            document.getElementById("gameStatus").textContent = "Empate! 😐";
            gameOver = true;
            return;
        }

        // Alterna jogador
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // linhas
        [0,3,6], [1,4,7], [2,5,8], // colunas
        [0,4,8], [2,4,6]           // diagonais
    ];

    return winPatterns.some(pattern =>
        pattern.every(i => board[i] === currentPlayer)
    );
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    const cells = document.getElementsByClassName("cell");
    Array.from(cells).forEach(cell => (cell.textContent = ""));

    document.getElementById("gameStatus").textContent = "";
}
