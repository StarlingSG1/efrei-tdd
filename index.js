import {displayBoard, initChessGame} from "./boardInitialization/boardInitialization.js";
import {moveRook} from "./piecesActions/Rook/rook.js";
import {movePawn} from "./piecesActions/Pawn/pawn.js";

initChessGame();

const board = initChessGame();
displayBoard(board);
// const updatedBoard = moveRook(board, [7, 0], [5, 0]);
// displayBoard(updatedBoard);
const updatedBoard = movePawn(board, [6, 7], [4, 7], "♙");
// displayBoard(updatedBoard);
