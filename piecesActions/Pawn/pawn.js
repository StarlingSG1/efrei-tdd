import {displayBoard} from "../../boardInitialization/boardInitialization.js";
import {applyMove, isCorrectTypeOfPiece} from "../utils/_functions.js";

function isValidPawnMove(board, start, end, color) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    const direction = color === '♙' ? -1 : 1;
    const initialRow = color === '♙' ? 6 : 1;

    const isForwardOne = endRow === startRow + direction && startCol === endCol;
    const isForwardTwo = startRow === initialRow && endRow === startRow + 2 * direction && startCol === endCol;
    const isCapture = Math.abs(startCol - endCol) === 1 && endRow === startRow + direction;

    if (board[startRow][startCol] !== "♟" && board[startRow][startCol] !== "♙") {
        return false;
    }

    if (!isForwardOne && !isForwardTwo && !isCapture) {
        return false;
    }

    if (isCapture) {
        if (board[endRow][endCol] === null || board[endRow][endCol].toLowerCase() === board[startRow][startCol].toLowerCase()) {
            return false;
        }
    } else if (board[endRow][endCol] !== null) {
        return false;
    }

    if (isForwardTwo && (board[startRow + direction][startCol] !== null || board[endRow][endCol] !== null)) {
        return false;
    }

    return true;
}

function movePawn(board, start, end, color) {
    if (isValidPawnMove(board, start, end, color)) {
        applyMove(board, start, end)
    } else {
        console.log('Invalid pawn move')
    }
        return board;
}

export {
    isValidPawnMove,
    movePawn
}