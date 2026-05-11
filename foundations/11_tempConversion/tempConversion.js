// const convertToCelsius = function() {
// };

// const convertToFahrenheit = function() {
// };

const convertToCelsius = (fTemp) => {
  if(fTemp === 32) return 0;
  return +((fTemp-32) * 5 / 9).toFixed(1);
}

const convertToFahrenheit = (cTemp) => {
  if(cTemp === 0) return 32;
  return +(cTemp * 9/5 + 32).toFixed(1);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
