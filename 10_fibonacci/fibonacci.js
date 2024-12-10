const fibonacci = function(num) {
  let int = Number(num);
  if(int >= 0) {
    let fib = [0, 1];
    for(let i = 2; i <= int; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[int];
  } else {
    return "OOPS";
  }  
};

// Do not edit below this line
module.exports = fibonacci;
