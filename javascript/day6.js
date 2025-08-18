for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i, "EVEN NUMBER");
  } else {
    console.log(i, "ODD NUMBER");
  }
}

let totalSum = 0;

for (let i = 1; i <= 5; i++) {
  console.log(i);

  console.log(`Total sum of 1 to 5 is: ${(totalSum += i)}`);
}

// While Loop

let time = 10;
while (time >= 0) {
  console.log(time, "YEH WHILE LOOP HAI");

}

// let correctPin = 3476;
// let userPin;
// let maxAttempts = 3;
// let userAttempts = 1;

// while (userAttempts <= maxAttempts) {
//   userPin = prompt("Please enter your PIN");
//   if (userPin == correctPin) {
//     console.log("LOGIN SUCCESS");
//     break;
//   } else {
//     console.log(
//       `Please try again, ${maxAttempts - userAttempts} attempts left`
//     );
//   }
//   userAttempts++;
// }

// if (userAttempts > maxAttempts) {
//   console.log("YOUR ACCOUNT IS BLOCKED, PLEASE CONTACT YOUR BANK");
// }

let correctGuess = 6;
let userGuess;

while (userGuess !== correctGuess) {
  userGuess = prompt("Please guess correct.");
  //   userGuess++;
  if (userGuess == correctGuess) {
    console.log("Congrates, you have won.");
    break;
  } else {
    console.log("You have guessed wrong");
  }

  userGuess++;
}
