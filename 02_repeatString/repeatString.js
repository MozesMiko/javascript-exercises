const repeatString = function(string, num) {
  let output = "";
  if(num >= 0){
    for(i = 0; i < num; i++){
      output += string;
    }
  } else {
    output = "ERROR";
  }
  
  return output;
};

// Do not edit below this line
module.exports = repeatString;
