const sumAll = function(startNumber, endNumber) {
  let finalSum = 0;
  if(startNumber < 0 || endNumber < 0 ||
    !Number.isInteger(startNumber) || !Number.isInteger(endNumber)) {
    finalSum = "ERROR";
  } else {
    if(startNumber < endNumber) {
      for(let i = startNumber; i <= endNumber; i++){
        finalSum += i;
      }
    } else {
      for(let i = endNumber; i <= startNumber; i++){
        finalSum += i;
      }
    }
  }  
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
