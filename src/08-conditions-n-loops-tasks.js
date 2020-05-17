function getFizzBuzz(num) {
  const temp = [];
  if (num % 3 === 0) temp.push('Fizz');
  if (num % 5 === 0) temp.push('Buzz');
  if (temp.length) return temp.join('');
  return num;
}


function getFactorial(n) {
  if (n <= 1) return 1;
  return n * getFactorial(n - 1);
}

function getSumBetweenNumbers(n1, n2) {
  let temp = 0;
  for (let i = n1; i <= n2; i += 1) {
    temp += i;
  }
  return temp;
}

function isTriangle(a, b, c) {
  return (a + b > c) && (a + c > b) && (b + c > a);
}


function doRectanglesOverlap(rect1, rect2) {
  return ((rect1.top + rect1.height) > rect2.top && rect1.top <= rect2.top
            && (rect1.left + rect1.width) > rect2.left && rect1.left <= rect2.left)
        || ((rect2.top + rect2.height) > rect1.top && rect2.top <= rect1.top
            && (rect2.left + rect2.width) > rect1.left && rect2.left <= rect1.left);
}


function isInsideCircle(circle, point) {
  return ((circle.center.x - point.x) ** 2 + (circle.center.y - point.y) ** 2)
        < (circle.radius) ** 2;
}


function findFirstSingleChar(str) {
  const { length } = str;
  for (let i = 0; i < length; i += 1) {
    if (str.slice(0, i).concat(str.slice(i + 1)).indexOf(str[i]) === -1) return str[i];
  }
  return null;
}


function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const s = { true: '[', false: '(' };
  const e = { true: ']', false: ')' };
  return `${s[isStartIncluded]}${Math.min(a, b)}, ${Math.max(a, b)}${e[isEndIncluded]}`;
}


function reverseString(str) {
  return str.split('').reverse().join('');
}


function reverseInteger(num) {
  return +num.toString().split('').reverse().join('');
}


function isCreditCardNumber(ccn) {
  let temp = ccn.toString();
  const { length } = temp;
  let i = 0;
  let el = 0;
  if (length % 2 !== 0) i = 1;
  for (; i < length; i += 2) {
    el = +temp[i] * 2;
    if (el > 9) { el -= 9; }
    temp = temp.slice(0, i).concat(el).concat(temp.slice(i + 1));
  }
  return (temp.split('').reduce((per, sew) => +per + +sew)) % 10 === 0;
}


function getDigitalRoot(num) {
  const temp = num.toString().split('').reduce((per, sew) => +per + +sew);
  if (temp > 9) return getDigitalRoot(temp);
  return temp;
}


function isBracketsBalanced(str) {
  const bracketsSet = ['{}', '[]', '()', '<>'];
  let temp = str;

  for (let i = 0; i < bracketsSet.length;) {
    if (temp.indexOf(bracketsSet[i]) !== -1) {
      temp = temp.replace(bracketsSet[i], '');
      i = 0;
    } else i += 1;
  }

  return !temp;
}


function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
  const temp = [];
  const { length } = pathes;

  for (let i = 0; i < length; i += 1) {
    temp.push(pathes[i].split('/'));
  }

  for (let k = 0; k < temp[0].length; k += 1) {
    for (let j = 1; j < temp.length; j += 1) {
      if (temp[j][k] !== temp[0][k]) {
        let res = temp[0].slice(0, k).join('/');
        res = res.concat('/');
        if (res.length === 1) {
          for (let l = 0; l < length; l += 1) {
            if (pathes[l][0] !== '/') res = '';
          }
        }
        return res;
      }
    }
  }

  return temp[0].slice(0, temp[0].length - 1).join('/');
}


function getMatrixProduct(m1, m2) {
  const temp = [];
  for (let k = 0; k < m1.length; k += 1) {
    const www = [];
    for (let j = 0; j < m2[0].length; j += 1) {
      let sum = 0;
      for (let i = 0; i < m2.length; i += 1) {
        sum += m1[k][i] * m2[i][j];
      }
      www.push(sum);
    }
    temp.push(www);
  }
  return temp;
}

function evaluateTicTacToePosition(position) {
  const { length } = position[0];
  const rows = [];
  let diagonal = [];
  let diagonalBack = [];
  for (let i = 0; i < length; i += 1) {
    rows.push(position[i].join(''));
    diagonal.push(position[i][i]);
    diagonalBack.push(position[i][length - i - 1]);
  }

  diagonal = diagonal.join('');
  diagonalBack = diagonalBack.join('');

  const columns = [];
  for (let k = 0; k < length; k += 1) {
    const temp = [];
    for (let m = 0; m < length; m += 1) {
      temp.push(position[m][k]);
    }
    columns.push(temp.join(''));
  }

  if (rows.indexOf('XXX') !== -1 || columns.indexOf('XXX') !== -1
        || diagonal === 'XXX' || diagonalBack === 'XXX') {
    return 'X';
  }
  if (rows.indexOf('000') !== -1 || columns.indexOf('000') !== -1
        || diagonal === '000' || diagonalBack === '000') {
    return '0';
  }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
