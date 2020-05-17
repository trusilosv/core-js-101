function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function getArea() {
    return this.width * this.height;
  };
}

function getJSON(obj) {
  return JSON.stringify(obj);
}

function fromJSON(proto, json) {
  const result = Object.create(proto);
  const data = JSON.parse(json);
  Object.keys(data).forEach((item) => {
    result[item] = data[item];
  });
  return result;
}


const cssSelectorBuilder = {
  element(/* value */) {
    throw new Error('Not implemented');
  },

  id(/* value */) {
    throw new Error('Not implemented');
  },

  class(/* value */) {
    throw new Error('Not implemented');
  },

  attr(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoClass(/* value */) {
    throw new Error('Not implemented');
  },

  pseudoElement(/* value */) {
    throw new Error('Not implemented');
  },

  combine(/* selector1, combinator, selector2 */) {
    throw new Error('Not implemented');
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
