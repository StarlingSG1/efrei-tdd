const createEmptyBoard = () => {
    const board = new Array(8);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(8).fill(null);
    }
    return board;
};

const initPieces = (board, pieces, startRow) => {
    board[startRow] = pieces[0];
    board[startRow + 1] = pieces[1];
    return board;
}

const initAllPieces = (board) => {
    const BLACK_PIECES = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ];
    const WHITE_PIECES = [
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ];
    return initPieces(initPieces(board, BLACK_PIECES, 0), WHITE_PIECES, 6);
}

const initChessGame = () => {
    const startBoard = initAllPieces(createEmptyBoard())
    // displayBoard(startBoard);
    return startBoard;
};

function displayBoard(board) {
    board.forEach(row => {
        console.log(row.map(piece => piece || '-').join(' '));
    });
};

export {
    displayBoard,
    createEmptyBoard,
    initAllPieces,
    initChessGame,
}
