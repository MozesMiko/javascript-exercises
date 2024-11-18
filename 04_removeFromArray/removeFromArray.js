const removeFromArray = function(array, ...keyWords) {
  for(let i = 0; i < keyWords.length; i++){
    if(array.includes(keyWords[i])){
      while(array.includes(keyWords[i])){
        const removeThis = array.indexOf(keyWords[i]);
        array.splice(removeThis, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
