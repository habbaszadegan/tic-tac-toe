function ticTacToe() {

    const gameBoard = (function () {
        let board = [];
        let incrementor = 0;
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i][j] = incrementor++;
            }
        }
        console.log(board);
        return {board};
    })();

    const players = (function () {
        const playerX = {
            name: 'x',
            score: 0
        }
    
        const playerO = {
            name: 'o',
            score: 0
        }
        return {playerX, playerO}
    });

    function game() {
        let currentGame = gameBoard();
        let currentPlayers = players();

    }

    function takeTurns() {
        let playerXInputRow = prompt(`X: Row?`);
        let playerXInputColumn = prompt(`Y: Column?`);
        currentGame.board[playerXInputRow][playerXInputColumn] = 'X';

        let playerOInputRow = prompt(`X: Row?`);
        let playerOInputColumn = prompt(`Y: Column?`);
        currentGame.board[playerOInputRow][playerOInputColumn] = 'O';
    };

    function oneRound(turns, playrs) {
        function winCheck () {
            const winningConditions = [
                [0, 1, 2], // First row
                [3, 4, 5], // Second row
                [6, 7, 8], // Third row
                [0, 3, 6], // First column
                [1, 4, 7], // Second column
                [2, 5, 8], // Third column
                [0, 4, 8], // First diagonal
                [2, 4, 6], // Second diagonal
            ];

            
        }
    }
};

ticTacToe();



// 2. Define players
//      a. Create objects containing and updating player name, token input and score
//      i. Should include: name (enter x or o), score
// Update player selection on gameboard



