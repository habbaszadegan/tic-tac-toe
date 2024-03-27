function gameBoard() {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    playerSelection(board);


}

function playerSelection(gBoard) {
    gboard[1][1] = 1;
    gBoard[1][2] = 2;
    gBoard[0][1] = 1;
    gBoard[2][0] = 2;
}

function win(gBoard) {
    //write 2d for loop checking for every possible line:
    if(gboard[0][0])
}