import {applyMove} from "../utils/_functions.js";

function isMoveLegal(board, start, end) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;

    const isHorizontalMove = startRow === endRow;
    const isVerticalMove = startCol === endCol;

    if (board[startRow][startCol] !== "♜" && board[startRow][startCol] !== "♖") {
        return false;
    }

    if (!isHorizontalMove && !isVerticalMove) {
        return false; // Invalid move
    }


    if (!isPathClear(board, start, end, isHorizontalMove)) {
        return false;
    }

    return true;
}

function isPathClear(board, start, end, isHorizontalMove) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    const pathLength = isHorizontalMove ? Math.abs(startCol - endCol) : Math.abs(startRow - endRow);

    for (let step = 1; step < pathLength; step++) {
        const row = isHorizontalMove ? startRow : startRow + step * Math.sign(endRow - startRow);
        const col = isHorizontalMove ? startCol + step * Math.sign(endCol - startCol) : startCol;
        if (board[row][col] !== null) {
            return false;
        }
    }

    return true;
}

function moveRook(board, start, end) {
    if(isMoveLegal(board, start, end)) {
        applyMove(board, start, end)
    } else {
        console.log("Invalid move")
    }
        return board;
}

export {
    isPathClear,
    moveRook
}

