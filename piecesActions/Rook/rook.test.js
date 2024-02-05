import { describe, expect, test } from "vitest";
import { moveRook } from "./rook.js";

describe('Check rook move', () => {
    const INITIAL_HORIZONTAL_1_BOARD = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, '♙'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, '♖'],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', null],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', null],
    ]

    const UPDATED_HORIZONTAL_1_BOARD = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, '♙'],
        [null, null, null, null, null, null, null, null],
        ['♖', null, null, null, null, null, null, null],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', null],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', null],
    ]

    test('Should move the rook horizontaly', () => {
        expect(moveRook(INITIAL_HORIZONTAL_1_BOARD, [5, 7], [5, 0])).toStrictEqual(UPDATED_HORIZONTAL_1_BOARD)
    })

    const INITIAL_HORIZONTAL_2_BOARD = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, '♙'],
        [null, null, null, null, null, null, null, null],
        [null, null, '♙', null, null, null, null, '♖'],
        ['♙', '♙', null, '♙', '♙', '♙', '♙', null],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', null],
    ]

    test('Shouldn\'t move the rook horizontaly: path not clear', () => {
        expect(moveRook(INITIAL_HORIZONTAL_2_BOARD, [5, 7], [5, 0])).toStrictEqual(INITIAL_HORIZONTAL_2_BOARD)
    })

    const INITIAL_VERTICAL_1_BOARD = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, '♙', null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, '♖'],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', null],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', null],
    ]

    const UPDATED_VERTICAL_1_BOARD = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        [null, null, null, null, null, null, null, '♖'],
        [null, null, null, null, null, '♙', null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', null],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', null],
    ]

    test('Should move the rook verticaly', () => {
        expect(moveRook(INITIAL_VERTICAL_1_BOARD, [5, 7], [2, 7])).toStrictEqual(UPDATED_VERTICAL_1_BOARD)
    })

    const INVALID_MOVE = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, '♙'],
        [null, null, null, null, null, null, null, null],
        [null, null, '♙', null, null, null, null, '♖'],
        ['♙', '♙', null, '♙', '♙', '♙', '♙', null],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', null],
    ]

    test('Shouldn\'t move the rook: invalid move is neither horizontal or vertical', () => {
        expect(moveRook(INVALID_MOVE, [5, 7], [2, 0])).toStrictEqual(INVALID_MOVE)
    })

    test('Shouldn\'t move the rook: out of board', () => {
        expect(moveRook(INVALID_MOVE, [5, 7], [-3, -1])).toStrictEqual(INVALID_MOVE)
    })

    test('Shouldn\'t move the rook: piece is not a rook', () => {
        expect(moveRook(INVALID_MOVE, [0, 1], [2, 7])).toStrictEqual(INVALID_MOVE)
    })
})