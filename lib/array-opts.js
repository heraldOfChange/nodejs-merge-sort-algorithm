'use strict';

const arrayContainsObjects = (inputArray) => inputArray.filter(a => typeof a === 'object').length > 0;

const splitArrayIntoTwo = (inputArray) => {
  const arrayMiddleIndex = Math.ceil(inputArray.length / 2);
  const lefthand = inputArray.slice(0, arrayMiddleIndex);
  const righthand = inputArray.slice(arrayMiddleIndex, inputArray.length);

  return [ lefthand, righthand ];
};

module.exports = {
  arrayContainsObjects,
  splitArrayIntoTwo
};
