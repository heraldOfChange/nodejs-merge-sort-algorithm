'use strict';

const { objectToString } = require('../lib/object-to-string');
const { arrayContainsObjects } = require('../lib/array-opts');

describe('MergeSorter', () => {
  it('MergeSorter\'s factory method returns an instance of MergeSorter', () => {
    const actual = require('./merge-sorter')();
    expect(actual.constructor.name).toBe('MergeSorter');
  });

  describe('MergeSorter.mergeSort()', () => {
    [
      { input: [ 5, 4, 3, 2, 1 ] },
      { input: [ 5, 4, 3, 2, 1, 9, 8, 7, 6 ] },
      { input: [ 6, 5, 4, 3, 2, 1, 7, 8, 9 ] },
      { input: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }
    ].forEach(({ input }) => {
      it(`mergeSort(${objectToString(input)}) returns an array with numbers`, () => {
        const mergeSorter = require('./merge-sorter')();
        const actual = mergeSorter.mergeSort(input);

        expect(actual.length).toBeGreaterThan(0);
        expect(arrayContainsObjects(actual)).toBe(false);
      });
    });
  });

  describe('MergeSorter.merge()', () => {
    [
      { input: [ [ 5, 4 ], [ 3, 2 ] ], expected: [ 2, 3, 4, 5 ] },
      { input: [ [ 5, 4 ], [ 2 ] ], expected: [ 2, 4, 5 ] },
      { input: [ [ 40, 12 ], [] ], expected: [ 12, 40 ] },
      { input: [ [], [ 40, 12 ] ], expected: [ 12, 40 ] },
      { input: [ [], [] ], expected: [] },
    ].forEach(({ input, expected }) => {
      it(`merge(${objectToString(input)} returns ${objectToString(expected)}`, () => {
        const mergeSorter = require('./merge-sorter')();
        const actual = mergeSorter.merge(input);

        expect(actual).toEqual(expected);
      });
    });
  });
});
