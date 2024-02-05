import {describe, expect, test} from 'vitest'
import { createEmptyBoard, initAllPieces, initChessGame } from "./boardInitialization";


describe('Should init the board to start the game', () => {

    const EMPTY_BOARD = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
    ]

    test('should return 8 * 8 array', () => {
        expect(createEmptyBoard()).toStrictEqual(EMPTY_BOARD)
    })

    test('Should add black and white piece to the board', () => {
        expect(initAllPieces(EMPTY_BOARD)).toStrictEqual(
          [
              ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
              ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null],
              ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
              ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
          ]
        )
    })
})

