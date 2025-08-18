console.log("DAY 5");

//SWITCH CASES IN JS

let userInput = "Sameer";

switch (userInput) {
  case "qwerty12":
    console.log(`User has entered ${userInput} item. PEPSI`);

  case "Sprite":
    console.log(`User has entered ${userInput} item. SPRITE`);

  case "Next Cola":
    console.log(`User has entered ${userInput} item. Next Cola`);
    break;

  default:
    console.log(`User has entered ${userInput} item, and it is not available`);
    break;
}

let menuItems = 18;

switch (menuItems) {
  case 1:
    console.log("Fish");
    break;
  case 2:
    console.log("Chicken");
    break;
  case 3:
    console.log("Rice");
    break;
  case 4:
    console.log("Sweets");
    break;
  case 5:
    console.log("BBQ");
    break;
  case 6:
    console.log("Tikka");
    break;
  case 7:
    console.log("Karahi");
    break;
  case 8:
    console.log("Kunafa");
    break;
  case 9:
    console.log("Paratha");
    break;
  case 10:
    console.log("Ice Cream");
    break;
  case 11:
    console.log("Cold Drinks");
    break;
  case 12:
    console.log("Tea");
    break;
  case 13:
    console.log("Nehaari");
    break;
  case 14:
    console.log("Mutton");
    break;
  case 15:
    console.log("Haleem");
    break;

  default:
    console.log("Item not available");
    break;
}

//LOOPS
// 1- FOR LOOP
// 2- WHILE LOOP
// 3- DO WHILE LOOP

for (let i = 1; i <= 5; i++) {
  console.log(`SNO: ${i}`);
}

// DRY - DO NOT REPEAT YOURSELF

let tableNumber = prompt("Enter any table number");

for (let i = 1; i <= 10; i++) {
  console.log(`${tableNumber} X ${i} = ${tableNumber * i}`);
}

// 3 X 1 = 3
// 3 X 2 = 6
// 3 X 3 = 9


let balance = 20000;

while (balance > 0){
  let bill = prompt("Enter Bill Amount")

  if(bill <= balance){
    balance -= bill;
  }
}
