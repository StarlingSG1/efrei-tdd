import { describe, expect, test } from "vitest";
import { movePawn } from "./pawn.js";

describe('Check paws move', () => {
    const INITIAL_1_BOARD = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ]

    const UPDATED_1_BOARD = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, '♙'],
        [null, null, null, null, null, null, null, null],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', null],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ]

    test('Should move paws', () => {
        expect(movePawn(INITIAL_1_BOARD, [6, 7], [4, 7])).toStrictEqual(UPDATED_1_BOARD)
    })
    //
    const INITIAL_2_BOARD = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, '♙'],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', null],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ]

    test("Shouldn't move the paws: can't move of two case if is not initial move", () => {
        expect(movePawn(INITIAL_2_BOARD, [5, 7], [5, 0])).toStrictEqual(INITIAL_2_BOARD)
    })

})