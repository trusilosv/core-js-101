function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, reject) => {
    if (typeof isPositiveAnswer !== 'boolean') reject(new Error('Wrong parameter is passed! Ask her again.'));
    if (isPositiveAnswer) {
      resolve('Hooray!!! She said "Yes"!');
    } else resolve('Oh no, she said "No".');
  });
}

function processAllPromises(array) {
  return Promise.all((array)).then((values) => values);
}

function getFastestPromise(array) {
  return Promise.race(array).then((values) => values);
}

async function chainPromises(array, action) {
  const res = [];
  let b = 0;
  b = await array.map((item) => Promise.resolve(item)
    .then((value) => {
      res.push(value);
    })
    .then(() => res.reduce(action))
    .catch(() => {
      b = b - 1 + 1;
    }));

  return b[0];
}


module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
