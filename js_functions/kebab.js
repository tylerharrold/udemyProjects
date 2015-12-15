function kebabToSnake(str){
  return str.replace(/-/g , "_");
}

var stringToChange = prompt("Enter a string");
console.log(kebabToSnake(stringToChange));
