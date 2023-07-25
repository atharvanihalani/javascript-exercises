const convertToCelsius = function(fahr) {
  cels = (fahr - 32) * 5/9;
  return Math.round(cels * 10) / 10;
};

const convertToFahrenheit = function(cels) {
  fahr = (cels * 9/5) + 32;
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
