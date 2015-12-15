var list=  ["test item"];
var userChoice = prompt("Please enter your selection.");

// function for listing items
function printList(value , index){
  console.log(index + ": " + value);
}

while(userChoice !== "quit"){
  if(userChoice === "list"){
    console.clear();
    list.forEach(printList);
  }
  else if(userChoice === "add"){
    var addition =  prompt("Please enter a new item for the list");
    list.push(addition);
  }
  else if(userChoice === "delete"){
    var toDelete = prompt("Please enter the index of the item to be deleted:")
    list.splice(toDelete , 1);
  }

  // promp user for another choice
  userChoice = prompt("Please enter another selection");
}
