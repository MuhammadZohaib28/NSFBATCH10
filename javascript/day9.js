let carsName = [
  "Honda",
  "Apple",
  "Mitsbuisshi",
  "Toyota",
  "Bugatti",
  "Nissan",
  "BMW",
];

//ARRAY K END MAI ITEM ADD HONA
carsName.push("Lexus");

//ARRAY K START MAI ITEM ADD HONA
carsName.unshift("Ferrari");

// ARRAY K END SAY REMOVE KARNA
carsName.pop();

// ARRAY K START SAY REMOVE KARNA
carsName.shift();

// AGAR SECOND PARAM 0 HO TOU ADD HOGA
carsName.splice(2, 0, "Lambourghini", "Suzuki");

carsName.splice(4, 2, "Mercedes", "Audi");

console.log(carsName);

let studentAges = [6, 8, 18, 13, 14, 16, 11, 10, 12, 22];

studentAges.sort((a, b) => a - b);

carsName.sort((a, b) => a - b);

console.log(carsName);

console.log(studentAges);

let filteredAges = studentAges.filter((age) => age >= 13);
console.log(studentAges, "FILTER");

console.log(filteredAges, "FILTER AGES");

let years = [2000, 2001, 2004, 2007, 1997, 1987, 2010, 2016, 1999, 1997, 2002];

years.sort((a, b) => a - b);

console.log(years);

let newYears = years.filter((filteredYear) => filteredYear >= 2004);

console.log(years, "ORIGINAL ARRAY");
console.log(newYears, "FILTERED ARRAY");

newYears.map((num) => console.log(num));


// for(let i = 0; i <= newYears.length - 1; i++){
//     console.log(newYears[i])
// }
