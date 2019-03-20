'use strict';

class MergeSorter {
  constructor(arrayOpts) {
    this.arrayOpts = arrayOpts;
  }

  merge(lefthand, righthand) {
    let combinedArray = [];

    while (lefthand.length && righthand.length)
      (lefthand[0] <= righthand[0]) ?
        combinedArray.push(lefthand.shift()) : combinedArray.push(righthand.shift());

    while (lefthand.length) {
      if (lefthand[0] <= lefthand[1]) lefthand.reverse();

      combinedArray.push(lefthand.shift());
    }

    while (righthand.length) {
      if (righthand[0] <= righthand[1]) righthand.reverse();

      combinedArray.push(righthand.shift());
    }

    return combinedArray;
  }

  mergeSort(inputArray) {
    if (inputArray.length === 1) {
      return inputArray;
    } else {
      const splitArray = this.arrayOpts.splitArrayIntoTwo(inputArray);

      return this.merge(
        this.mergeSort(splitArray[0]),
        this.mergeSort(splitArray[1])
      );
    }
  }
}

module.exports = (arrayOpts) => new MergeSorter(arrayOpts);
