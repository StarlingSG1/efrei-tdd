import {displayBoard} from "../../boardInitialization/boardInitialization.js";

export function applyMove(board, start, end) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    board[endRow][endCol] = board[startRow][startCol];
    board[startRow][startCol] = null;
    displayBoard(board)
    return board;
}

export function isCorrectTypeOfPiece(board, start, blackPiece ,whitePiece ){
    const [startRow, startCol] = start;
    return !(board[startRow][startCol] !== blackPiece && board[startRow][startCol] !== whitePiece);

}