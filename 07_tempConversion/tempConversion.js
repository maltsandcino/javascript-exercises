const convertToCelsius = function(temp) {
  let newTemp = (temp - 32) / 1.8;
  return +newTemp.toFixed(1)
};

const convertToFahrenheit = function(temp) {
  let newTemp = (temp * 1.8) + 32;
  return +newTemp.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
