function getComposition(f, g) {
  return function comp(x) {
    return f(g(x));
  };
}


function getPowerFunction(exponent) {
  return function pow(x) {
    return x ** exponent;
  };
}


function getPolynom(...args) {
  return function polynom(x) {
    switch (args.length) {
      case 3:
        return args[0] * (x ** 2) + args[1] * x + args[2];
      case 2:
        return args[0] * x + args[1];
      case 1:
        return args[0];
      default:
        return null;
    }
  };
}


function memoize(func) {
  const result = func();
  return function res() {
    return result;
  };
}


function retry(func, attempts) {
  let j;
  return function ret() {
    for (j = 0; j <= attempts; j += 1) {
      try {
        return func();
      } catch (e) { j += 0; }
    }
    return j - 1;
  };
}


function logger(func, logFunc) {
  let start = '';
  let end = '';
  let result = null;
  return function wrapper(...args) {
    start = `${func.name}(${JSON.stringify(args).slice(1, -1)}) starts`;
    logFunc(start);
    result = func(...args);
    end = `${func.name}(${JSON.stringify(args).slice(1, -1)}) ends`;
    logFunc(end);
    return result;
  };
}


function partialUsingArguments(fn, ...args1) {
  return function part(...args2) {
    return fn(...args1, ...args2);
  };
}

function getIdGeneratorFunction(startFrom) {
  let a = startFrom - 1;
  return function generator() {
    a += 1;
    return a;
  };
}


module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
