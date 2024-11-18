const leapYears = function(year) {
  let isItLeap;
  if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    isItLeap = true;
  } else {
    isItLeap = false;
  }
  return isItLeap;
};

// Do not edit below this line
module.exports = leapYears;
