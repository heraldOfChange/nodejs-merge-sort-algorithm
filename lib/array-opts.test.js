'use strict';

const { objectToString } = require('./object-to-string');

describe('array-opts', () => {
  describe('array-opts.arrayContainsObjects()', () => {
    [
      { input: [], expected: false },
      { input: [ 1 ], expected: false },
      { input: [ 2 ], expected: false },
      { input: [ [] ], expected: true },
      { input: [ [ 1 ] ], expected: true },
      { input: [ [ [ 2 ] ] ], expected: true },
    ].forEach(({ input, expected }) => {
      it(`arrayContainsObjects(${objectToString(input)}) returns ${expected}`, () => {
        const { arrayContainsObjects } = require('./array-opts');
        const actual = arrayContainsObjects(input);

        expect(actual).toBe(expected);
      });
    });
  });

  describe('array-opts.splitArrayIntoTwo()', () => {
    [
      { input: [ 1, 2, 3, 4, 5 ], expected: [ [ 1, 2, 3 ], [ 4, 5 ] ] },
      { input: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], expected: [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9 ] ] },
      { input: [ 1, 2, 3, 4 ], expected: [ [ 1, 2 ], [ 3, 4 ] ] }
    ].forEach(({ input, expected }) => {
      it(`splitArrayIntoTwo(${objectToString(input)}) returns ${objectToString(expected)}`, () => {
        const { splitArrayIntoTwo } = require('./array-opts');
        const actual = splitArrayIntoTwo(input);

        expect(actual).toEqual(expected);
      });
    });
  });
});
