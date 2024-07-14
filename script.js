function ticTacToe() {

    // Game board and player functions
    const gameBoard = (function() {
        let board = [];
        let incrementor = 0;
        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i][j] = incrementor++;
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
        cGame[playerXInputRow][playerXInputColumn] = cGame[playerXInputRow][playerXInputColumn]+'X';

        let playerOInputRow = prompt(`O: Row?`);
        let playerOInputColumn = prompt(`O: Column?`);
        cGame[playerOInputRow][playerOInputColumn] = cGame[playerOInputRow][playerOInputColumn]+'O';

        console.log(cGame);
    };

    takeTurns(gameBoard.newBoard());

    function winCheck (gBoard, playerSymbol) {
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

        for (let i = 0; i < winningConditions.length; i++) {
            const condition = winningConditions[i];
            if (gBoard[condition[0]] === playerSymbol &&
                gBoard[condition[1]] === playerSymbol &&
                gBoard[condition[2]] === playerSymbol) {
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



