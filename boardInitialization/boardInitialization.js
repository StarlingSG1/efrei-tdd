const createEmptyBoard = () => {
    const board = new Array(8);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(8).fill(null);
    }
    return board;
};

const displayBoard = (board) => {
    board.forEach(row => {
        console.log(row.map(piece => piece || '-').join(' '));
    });
};

const initChessGame = () => {
    const board = createEmptyBoard();
    displayBoard(board);
};

export {
    createEmptyBoard,
    initChessGame
}
