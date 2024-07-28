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
            name: 'X',
            score: 0
        }
    
        const O = {
            name: 'O',
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

    const oneRound = function () {
        const newGameBoard = gameBoard.newBoard();
        const X = players.playerX();
        const O = players.playerO();

        while (winCheck(newGameBoard, X.name) === false && winCheck(newGameBoard, O.name) === false) {
            takeTurns(newGameBoard);
        }
        
        if (winCheck(newGameBoard, X.name) === true) {
            let xScore = X.score++;
            console.log(`X wins! X: ${X.score} O: ${O.score}`);
            return {xScore};
        } else {
            let oScore = O.score++;
            console.log(`O wins! X: ${X.score} O: ${O.score}`);
            return {oScore};
        }

    }

    function game() {
        while (oneRound.xScore != 3 || oneRound.oScore != 3){
            oneRound();
        }

        if (oneRound.xScore == 3) {
            console.log(`X wins the game!`);
        } else {
            console.log(`O wins the game!`);
        }
    }
    
    game();
};

ticTacToe();



// 2. Define players
//      a. Create objects containing and updating player name, token input and score
//      i. Should include: name (enter x or o), score
// Update player selection on gameboard



