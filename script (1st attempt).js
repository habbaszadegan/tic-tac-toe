function gameBoard() {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    playerSelection(board);
    win(board);

}

gameBoard();

function playerSelection(gBoard) {

    //set someone as the main turn
    //give condition that if() its the main person turn switch the input person
    const players = [
        {
            name: 'player1',
            value: 1
        },
        {
            name: 'player2',
            value: 2
        }
    ];

    gBoard[1][1] = 1;
    gBoard[1][2] = 2;
    gBoard[0][0] = 1;
    gBoard[2][0] = 2;
    gBoard[2][2] = 1;
}

function win(gBoard) {
    const winCases = {
         winCase1 : gBoard[0][0] === 1 && gBoard[1][0] === 1 && gBoard[2][0] === 1,
         winCase2 : gBoard[0][1] === 1 && gBoard[1][1] === 1 && gBoard[2][1] === 1,
         winCase3 : gBoard[0][2] === 1 && gBoard[1][2] === 1 && gBoard[2][2] === 1,
         winCase4 : gBoard[0][0] === 1 && gBoard[0][1] === 1 && gBoard[0][2] === 1,
         winCase5 : gBoard[1][0] === 1 && gBoard[1][1] === 1 && gBoard[1][2] === 1,
         winCase6 : gBoard[2][0] === 1 && gBoard[2][1] === 1 && gBoard[2][2] === 1,
         winCase7 : gBoard[0][0] === 1 && gBoard[1][1] === 1 && gBoard[2][2] === 1,
         winCase8 : gBoard[0][2] === 1 && gBoard[1][1] === 1 && gBoard[2][0] === 1,
    };

    for(const winCase in winCases) {
        if (winCases[winCase] === true) console.log('winner!');
    }
}