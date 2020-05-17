function getRegexForGuid() {
  return new RegExp(/^\{[0-9A-F]{8}(-[0-9A-F]{4}){3}-[0-9A-F]{12}\}$/i);
}

function getRegexForPitSpot() {
  return /p[^]t/;
}

function getPasswordValidator(minLength) {
  return new RegExp(`^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{${minLength},}$`);
}


module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
