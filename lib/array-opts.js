'use strict';

const arrayContainsObjects = (inputArray) => inputArray.filter(a => typeof a === 'object').length > 0;

module.exports = {
  arrayContainsObjects
};
