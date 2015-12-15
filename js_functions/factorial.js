function factorial(num){
  if(num === null || num === undefined){
    return "There was an error, please try again";
  }
  var result = 1;
  for(i = num; i >  0 ; i--){
    result*= i;
  }
  return result;
};

var numToTest = Number(prompt("Please enter a number"));

console.log(factorial(numToTest));
