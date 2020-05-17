function parseDataFromRfc2822(value) {
  return Date.parse(value);
}

function parseDataFromIso8601(value) {
  return Date.parse(value);
}


function isLeapYear(date) {
  const year = date.getFullYear();
  if (year % 4 === 0) {
    if (year % 100 !== 0) { return true; }
    if (year % 400 !== 0) { return false; }
    return true;
  }
  return false;
}

function timeSpanToString(startDate, endDate) {
  const time = new Date(endDate - startDate);
  return `${time.toISOString().slice(11, 23)}`;
}


function angleBetweenClockHands(date) {
  let hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  if (hour >= 12) hour -= 12;
  const ss = minute / 2;
  hour = hour * 30 + ss;

  let degree = Math.abs(hour - minute * 6);
  if (degree > 180) degree = 360 - degree;
  return Math.PI * (degree / 180);
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
