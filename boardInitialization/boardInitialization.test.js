import { expect, test } from 'vitest'
import { createEmptyBoard } from "./boardInitialization";

test('should return 8 * 8 array', () => {
    expect(createEmptyBoard()).toStrictEqual(
      [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ]
    )
})
