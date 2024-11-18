const convertToCelsius = function(tempFahrenheit) {
  let celsius = Math.round(((tempFahrenheit -32.0) * (5.0 / 9.0)) * 10) / 10;
  return celsius; 
};

const convertToFahrenheit = function( tempCelsius) {
  let fahrenheit = Math.round(((tempCelsius * (9 / 5) + 32)) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};