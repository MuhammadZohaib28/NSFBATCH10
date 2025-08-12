console.log("DAY 4");

//  +  -  *  /  %  ** - ARTHIMATIC OPERATOR
//  ==, ===,  >,   <,   >=,   <= -  COMPARISION OPERATORS
// &&   ||   !  -  LOGICAL OPERATOR

let trafficSignal = "GREEN";

if (trafficSignal == "GrEeN") {
  console.log("Cars can go.");
} else if (trafficSignal == "YELLOW") {
  console.log("Cars can wait a little");
} else {
  console.log("Cars Stop");
}

let menuItem = 1;

let basheerAhemdSalary = "300000";
let bismaAhmedSalary = "125000";

let totalSalaries = basheerAhemdSalary + bismaAhmedSalary;

console.log(totalSalaries, " YEH TOTAL SALARIES HAIN");

if (menuItem === 1) {
  console.log("BIRYANI");
} else if (menuItem === 2) {
  console.log("KARAHI");
} else if (menuItem === 3) {
  console.log("KUNAFA");
} else {
  console.log("Please select correct option.");
}

let bankBalance = 100000;
let transactionAmount = 30000;
let validAtmPin = true;

if (transactionAmount <= bankBalance && validAtmPin) {
  console.log("Payment successful");
} else {
  console.log("Payment not successful");
}

// ||  - OR

let citizenMinAge = 65;
let citizenAge = 78;

let citizenDisability = false;

if (citizenAge >= citizenMinAge || !citizenDisability) {
  console.log(
    `Citizen age is ${citizenAge} and citizen have ${
      citizenDisability ? "Yes" : "No"
    } disability, Citizen can have FREE TICKET`
  );
} else {
  console.log(
    `Citizen age is ${citizenAge} and citizen have ${
      citizenDisability ? "Yes" : "No"
    } disability, Citizen cannot have FREE TICKET`
  );
}
