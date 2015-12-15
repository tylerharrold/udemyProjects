console.log("linked");

var toReverse = [1 , 2 , 3 , 4 , 5];

function printReverse(array){
  for(var i = array.length  - 1 ; i >= 0  ; i--){
    console.log(array[i]);
  }
}

var checkUniform = ["1" , "1" , "1" , "1" , "1"];

function checkIsUniform(array){

  for(i = 0 ; i < checkUniform.length ; i++){
    if(checkUniform[0] !== checkUniform[i]){
      return false;
    }
  }
  return true;
}

var sum = [2 , 3 , 4 , 6];

function sumArray(array){
  var total = 0;

  for(i = 0 ; i < array.length ; i++){
    total+= array[i];
  }

  return total;
}

var max =  [4 , 2 , 10 , 1 , -100];

function findMax(array){
  var maxValue = 0;

  for(i = 0 ; i < array.length ; i++){
    if(array[i] > maxValue){
      maxValue  = array[i];
    }
  }

  return maxValue;
}
