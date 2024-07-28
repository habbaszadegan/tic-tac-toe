function ticTacToe() {

    // Game board and player functions
    const gameBoard = (function() {
        let board = [];
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i][j] = null;
            }
        }

        let newBoard = () => board;
        return {newBoard};
    })();

    const players = (function() {
        const X = {
            name: 'x',
            score: 0
        }
    
        const O = {
            name: 'o',
            score: 0
        }

        let playerX = () => X;
        let playerO = () => O;

        return {playerX, playerO}
    })();

    // Game flow functions
    function takeTurns(cGame) {
        let playerXInputRow = prompt(`X: Row?`);
        let playerXInputColumn = prompt(`X: Column?`);
        cGame[playerXInputRow][playerXInputColumn] = 'X';

        let playerOInputRow = prompt(`O: Row?`);
        let playerOInputColumn = prompt(`O: Column?`);
        cGame[playerOInputRow][playerOInputColumn] = 'O';

        console.log(cGame);
    };

    takeTurns(gameBoard.newBoard())

    function winCheck (gBoard, playerSymbol) {
        const winningConditions = [
            [[0, 0], [0, 1], [0, 2]], // First row
            [[1, 0], [1, 1], [1, 2]], // Second row
            [[2, 0], [2, 1], [2, 2]], // Third row
            [[0, 0], [1, 0], [2, 0]], // First column
            [[0, 1], [1, 1], [2, 1]], // Second column
            [[0, 2], [1, 2], [2, 2]], // Third column
            [[0, 0], [1, 1], [2, 2]], // First diagonal
            [[0, 2], [1, 1], [2, 0]], // Second diagonal
        ];

        for (let condition of winningConditions) {
            if (condition.every(coord => gBoard[coord[0]][coord[1]] === playerSymbol)) {
                return true;
            }
        }

        return false;
    }

    function game() { // This function is a mess and needs extensive reworking
        let currentGame = gameBoard.board;
        console.log(currentGame);
        let currentPlayers = players();
        takeTurns(currentGame);

        function oneRound(turns, playrs, winDrwChk) {
            // draw the gameboard
                // choose your token
                // take turns inputting your token on the board
                // check win condition
                // update score
        }
    }    
};

ticTacToe();



// 2. Define players
//      a. Create objects containing and updating player name, token input and score
//      i. Should include: name (enter x or o), score
// Update player selection on gameboard



