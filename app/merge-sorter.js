'use strict';

class MergeSorter {
  constructor(arrayOpts){
    Array.bind(arrayOpts);
  }

  merge(lefthand, righthand) {
    return 1;
  }

  mergeSort(inputArray) {
    return inputArray;
  }
}

module.exports = (arrayOpts) => new MergeSorter(arrayOpts);
