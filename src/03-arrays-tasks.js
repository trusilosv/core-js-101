function findElement(array, value) {
  return array.indexOf(value);
}

function generateOdds(length) {
  const s = [1];
  for (let index = 1; index < length; index += 1) {
    s.push(index * 2 + 1);
  }
  return s;
}

function doubleArray(array) {
  return array.concat(array);
}

function getArrayOfPositives(array) {
  return array.filter((el) => el > 0);
}

function getArrayOfStrings(array) {
  return array.filter((el) => typeof el === 'string');
}

function removeFalsyValues(array) {
  return array.filter((el) => !!el === true);
}

function getUpperCaseStrings(array) {
  return array.map((el) => el.toUpperCase());
}

function getStringsLength(array) {
  return array.map((el) => el.length);
}

function insertItem(array, item, index) {
  return array.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

function toCsvText(arr) {
  return arr.map((el) => el.join(',')).join('\n');
}


function toArrayOfSquares(arr) {
  return arr.map((el) => el * el);
}


function getMovingSum(arr) {
  const arrtemp = [];
  arr.reduce((p1, p2) => {
    arrtemp.push(p1 + p2);
    return arrtemp[arrtemp.length - 1];
  }, 0);
  return arrtemp;
}


function getSecondItems(arr) {
  return arr.filter((i, index) => index % 2 !== 0);
}


function propagateItemsByPositionIndex(arr) {
  return arr.reduce((i1, i2, index) => i1.concat(new Array(index + 1).fill(i2)), []);
}

function get3TopItems(arr) {
  return arr.sort((i1, i2) => i2 - i1).slice(0, 3);
}


function getPositivesCount(arr) {
  return arr.filter((el) => (typeof el === 'number') && (el > 0)).length;
}

function sortDigitNamesByNumericOrder(arr) {
  const strnum = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  return arr.sort((a, b) => strnum[a] - strnum[b]);
}


function getItemsSum(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((i1, i2) => i2 + i1);
}


function getFalsyValuesCount(arr) {
  return arr.filter((el) => !!el === false).length;
}

function findAllOccurences(arr, item) {
  return arr.filter((arrtemp) => arrtemp === item).length;
}

function toStringList(arr) {
  return arr.join(',');
}


function sortCitiesArray(arr) {
  return arr.sort((i1, i2) => {
    if (i1.country > i2.country) return 1;
    if (i1.country < i2.country) return -1;
    if (i1.country === i2.country) {
      if (i1.city > i2.city) return 1;
      if (i1.city < i2.city) return -1;
    }
    return 0;
  });
}


function getIdentityMatrix(n) {
  const arrtemp = new Array(n).fill([]).map(() => new Array(n).fill(0));
  arrtemp.forEach((i, index) => {
    i.splice(index, 1, 1);
  });
  return arrtemp;
}


function getIntervalArray(start, end) {
  const arrtemp = new Array(end - start).fill(0);
  let index = start + 0;
  const sas = arrtemp.map(() => {
    index += 1;
    return index;
  });
  sas.unshift(start);
  return sas;
}

function distinct(arr) {
  const arrtemp = [];
  arr.forEach((el) => {
    if (!arrtemp.includes(el)) arrtemp.push(el);
    return el;
  });
  return arrtemp;
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  const tempkeys = array.map(keySelector);
  const value = array.map(valueSelector);
  const map = new Map();
  tempkeys.forEach((item, index) => {
    if (!map.has(item)) {
      map.set(item, [value[index]]);
    } else {
      map.set(item, map.get(item).concat([value[index]]));
    }
  });
  return map;
}


function selectMany(arr, childrenSelector) {
  return arr.reduce(
    (previousValue, currentValue) => previousValue.concat(childrenSelector(currentValue)), [],
  );
}


function getElementByIndexes(arr, indexes) {
  return indexes.reduce((i1, i2) => i1[i2], arr);
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
  const middle = arr.length / 2;
  const middleIndex = Math.floor(middle);
  const head = arr.slice(0, middleIndex);
  const tail = arr.slice(middleIndex);
  if (middle === middleIndex) return tail.concat(head);
  return tail.slice(1).concat(arr[middleIndex]).concat(head);
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
