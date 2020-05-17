function concatenateStrings(value1, value2) {
  return value1 + value2;
}

function getStringLength(value) {
  return value.length;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}

function getFirstChar(value) {
  return value[0];
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function repeatString(value, count) {
  return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

function unbracketTag(str) {
  return str.slice(1, -1);
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function extractEmails(str) {
  return str.split(';');
}

function getRectangleString(width, height) {
  let str = '';
  for (let index = 0; index < height; index += 1) {
    if (index === 0) {
      str += `┌${'─'.repeat(width - 2)}┐\n`;
    } else if (index === height - 1) {
      str += `└${'─'.repeat(width - 2)}┘\n`;
    } else {
      str += `│${' '.repeat(width - 2)}│\n`;
    }
  }

  return str;
}

function encodeToRot13(str) {
  const strchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const strchar2 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let outstr = '';
  let index = 0;

  for (let i = 0; i < str.length; i += 1) {
    index = strchar.indexOf(str[i]);
    if (index !== -1) {
      outstr += strchar2[index];
    } else outstr += str[i];
  }

  return outstr;
}

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function getCardId(value) {
  const arrey = ['A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];

  return arrey.indexOf(value);
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
