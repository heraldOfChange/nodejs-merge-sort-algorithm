'use strict';

const { objectToString } = require('../lib/object-to-string');
const arrayOpts = require('../lib/array-opts');

describe('MergeSorter', () => {
  it('MergeSorter\'s factory method returns an instance of MergeSorter', () => {
    const actual = require('./merge-sorter')(arrayOpts);
    expect(actual.constructor.name).toBe('MergeSorter');
  });

  describe('MergeSorter.mergeSort()', () => {
    [
      { input: [ 5, 4, 3, 2, 1 ] },
      { input: [ 5, 4, 3, 2, 1, 9, 8, 7, 6 ] },
      { input: [ 6, 5, 4, 3, 2, 1, 7, 8, 9 ] },
      { input: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] },
      { input: [ 340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646 ] }
    ].forEach(({ input }) => {
      it(`mergeSort(${objectToString(input)}) returns an array with numbers`, () => {
        const mergeSorter = require('./merge-sorter')(arrayOpts);
        const actual = mergeSorter.mergeSort(input);

        expect(actual.length).toBeGreaterThan(0);
        expect(arrayOpts.arrayContainsObjects(actual)).toBe(false);
      });
    });
  });

  describe('MergeSorter.merge()', () => {
    [
      { lefthand: [ 5 ], righthand: [ 3 ], expected: [ 3, 5 ] },
      { lefthand: [ 4 ], righthand: [ 2 ], expected: [ 2, 4 ] },
      { lefthand: [ 12 ], righthand: [], expected: [ 12 ] },
      { lefthand: [], righthand: [ 40 ], expected: [ 40 ] },
      { lefthand: [], righthand: [], expected: [] },
    ].forEach(({ lefthand, righthand, expected }) => {
      it(`merge(${objectToString(lefthand)}, ${objectToString(righthand)}) returns ${objectToString(expected)}`, () => {
        const mergeSorter = require('./merge-sorter')(arrayOpts);
        const actual = mergeSorter.merge(lefthand, righthand);

        expect(objectToString(actual)).toEqual(objectToString(expected));
      });
    });
  });
});
