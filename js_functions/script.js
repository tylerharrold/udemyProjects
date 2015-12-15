function isEven(num){
  if(num % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}

var numberToTest = Number(prompt("Please Enter a numberToTest"));

console.log(isEven(numberToTest));
