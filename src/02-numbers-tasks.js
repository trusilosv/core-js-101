function getRectangleArea(width, height) {
  return width * height;
}

function getCicleCircumference(radius) {
  return Math.PI * 2 * radius;
}

function getAverage(value1, value2) {
  return (value1 / 2 + value2 / 2);
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos((x1 * x2 + y1 * y2) / (Math.sqrt(x1 * x1 + y1 * y1)
        * Math.sqrt(x2 * x2 + y2 * y2)));
}

function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  return +value;
}

function getParallelipidedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

function roundToPowerOfTen(num, pow) {
  if (pow === 0) return num;
  return Math.round(num / (10 ** pow)) * (10 ** pow);
}

function isPrime(n) {
  let boo = true;
  for (let i = 2; i < n - 1; i += 1) {
    if (n % i === 0) boo = false;
  }
  return boo;
}
/**
 * Tries to convert value to number and returns it if conversion was successfull;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
  return parseInt(value, 10) || def;
}

module.exports = {
  getRectangleArea,
  getCicleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelipidedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
