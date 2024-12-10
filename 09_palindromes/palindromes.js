const palindromes = function (str) {
  let lowerCase = str.toLowerCase();
  let noPunc = lowerCase.replace(/[^a-zA-Z0-9]/g, '');
  let arr = noPunc.split("");
  arr.reverse();
  let output = arr.join("");
  if(noPunc === output) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
