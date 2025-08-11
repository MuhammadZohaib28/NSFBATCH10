console.log("DAY 3");

// IF ELSE CONDITIONAL

if (false) {
  console.log("CONDITION MERI TRUE HAI");
} else {
  console.log("CONDITION MERI FALSE HAI");
}

let citizenAge = 21;

let checker = citizenAge > 18;
console.log(checker);

if (citizenAge >= 18) {
  console.log("The citizen age is " + citizenAge + ". Citizen is eligible");
} else {
  console.log("The citizen age is " + citizenAge + ". Citizen is not eligible");
}

let isRaining = true;

if (isRaining) {
  console.log(`Class is ${isRaining ? "Off" : "On"}, because today is raining`);
} else {
  console.log(`Class is on, because today is not raining`);
}

if (citizenAge >= 18) {
  console.log(`The citizen age is ${citizenAge}. The CNIC is valid`);
} else {
  console.log(`The citizen age is ${citizenAge}. The CNIC is not valid`);
}

// +, -, *, /, **, %
// >=, <=, ==

let studentPercentage = 94;

if (studentPercentage > 100) {
  console.log("Not valid, please type percentage less than 100");
} else if (studentPercentage >= 90) {
  console.log(
    `STUDENT PERCENTAGE IS ${studentPercentage}%, student got A-ONE Grade.`
  );
} else if (studentPercentage >= 80) {
  console.log(
    `STUDENT PERCENTAGE IS ${studentPercentage}%, student got B Grade.`
  );
} else if (studentPercentage >= 70) {
  console.log(
    `STUDENT PERCENTAGE IS ${studentPercentage}%, student got C Grade.`
  );
} else {
  console.log("FAIL");
}