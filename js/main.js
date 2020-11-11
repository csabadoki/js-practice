'use strict';

//Assignment #1//
//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!

const numericArray = [15, 23, 345, 452345, 5, 452, 2345, 11, 12];
let minValue = numericArray[0];
for (let i = 1; i < numericArray.length; i += 1) {
  if (minValue > numericArray[i]) {
    minValue = numericArray[i];
  }
};
console.log('1. Smallest element in the array: ' + minValue);



//Assigment #2//
//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!//

const numericArray2 = [23, 345, 11110, 452, 452, 452, 2345, 11, 12];
let maxValue = numericArray2[0];
for (let i = 1; i < numericArray2.length; i += 1) {
  if (maxValue < numericArray2[i]) {
    maxValue = numericArray2[i];
  }
};
console.log('2. Biggest element in the array: ' + maxValue);



//Assigment #3//
///Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

const numericArray3 = [10, 235223, 235223, 52225, 122, 4, 4];
let sum = 0;
for (let i = 0; i < numericArray3.length; i += 1) {
  sum = sum + numericArray3[i];
};
console.log('3. Average of the array: ' + sum / numericArray3.length);



//Assigment #4//
/// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!

const numericArray4 = [10, 235223, 235223, 52225, 122, 4, 4];
let sum2 = 0;
for (let i = 0; i < numericArray4.length; i += 1) {
  sum2 = sum2 + numericArray4[i];
};
console.log('4. Sum of the array: ' + sum2);



//Assignment #5//
//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!

const numericArray5 = [10, 2, 235223, 235223, 52225, 122, 4, 4];
let numberOfEvenElements = 0;
for (let i = 0; i < numericArray5.length; i += 1) {
  if (numericArray5[i] % 2 == 0) {
    numberOfEvenElements = numberOfEvenElements + 1;
  } else {
  }
};
console.log('5. Number of even elements: ' + numberOfEvenElements);


//Assignment #6//
//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!

const numericArray6 = [15, 23, 345, 452345, 5, 452, 2345, 11, 12];
let minValueArray6 = numericArray6[0];
let indexMinValue = 0;
for (let i = 1; i < numericArray6.length; i += 1) {
  if (minValueArray6 > numericArray6[i]) {
    minValueArray6 = numericArray6[i];
    indexMinValue = i;
  }
};
let minSecondValueArray6 = numericArray6[0];
for (let i = 0; i < numericArray6.length; i += 1) {
  if ((minSecondValueArray6 > numericArray6[i]) && (i != indexMinValue)) {
    minSecondValueArray6 = numericArray6[i];
  }
};
console.log('6. Second smallest element in the array: ' + minSecondValueArray6);



//Assigment #7//
//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!

const numericArray7 = [12, 13, 41, 11315, 33, 3, 0, 34, 11, 3];
let maxValue7 = numericArray7[0];
let indexMaxValue7 = 0;
for (let i = 1; i < numericArray7.length; i += 1) {
  if (maxValue7 < numericArray7[i]) {
    maxValue7 = numericArray7[i];
    indexMaxValue7 = i;
  }
};
let maxSecondValue = numericArray7[0];
let indexMaxSecondValue = 0;
for (let i = 0; i < numericArray7.length; i += 1) {
  if ((maxSecondValue < numericArray7[i]) && (i != indexMaxValue7)) {
    maxSecondValue = numericArray7[i];
    indexMaxSecondValue = i;
  }
};
let maxThirdValue = numericArray7[0];
for (let i = 0; i < numericArray7.length; i += 1) {
  if ((maxThirdValue < numericArray7[i]) && (i != indexMaxValue7) && (i != indexMaxSecondValue)) {
    maxThirdValue = numericArray7[i];
  }
};

console.log('7. Third biggest element in the array: ' + maxThirdValue);

//Assigment #8//
///Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj lineáris keresést!

const numericArray8 = [10, 23, '2', 235223, 'John', undefined, 122, true];
let contains23 = 'no';
for (let i = 0; i < numericArray8.length; i += 1) {
  if (numericArray8[i] === 23) {
    contains23 = 'yes';
    break;
  } else {
  }
};
console.log('8. Contains 23: ' + contains23);



//Assigment #9//
// Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!

const numericArray9 = [1, 13, 4, 1, 3, 321, 23, 232, 33, 13];
numericArray9.sort((a, b) => a - b);

let searchTarget = function (array, target) {
  let min = 0;
  let max = array.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((max + min) / 2);

    if (array[guess] === target) {
      return console.log('9. Contains 23');
    }
    else if (array[guess] < target) {
      min = guess + 1;
    }
    else {
      max = guess - 1;
    }

  }
  return console.log('9. Does not contain 23');
};

searchTarget(numericArray9, 23);



//Assigment #10//
//Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

const numericArray10 = [10, 10, 23, 23, '2', 235223, 23, 'John', undefined, 122, true];
let contains1023 = 0;

for (let i = 0; i < numericArray10.length; i += 1) {
  if (numericArray10[i] === 23) {
    contains1023 = contains1023 + 1;
  } else {
  }
};
console.log('10. Contains 23: ' + contains1023 + ' times');


// Assignment #11
// Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt!

const numericArray11 = [332.33, 2323.1, 32232.1, 31.5673, 45.7, 422.5];
function sortItems(array) {
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}
sortItems(numericArray11);
console.log('11. Sorted array: ' + numericArray11);


// Assignment #12
// Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!

let numericArray12 = [101, 10.4, 23, 25, '2', 2352, 123, 'John', 122, true, false];
let numericArrayTemp = [];
let numericArrayTempNumbers = [];
let nonNumberElements = 0;
let numberElements = 0;

for (let i = 0; i < numericArray12.length; i += 1) {
  if (Number.isFinite(numericArray12[i]) === false) {
    numericArrayTemp[nonNumberElements] = numericArray12[i];
    nonNumberElements = nonNumberElements + 1;
  }
};

for (let i = 0; i < numericArray12.length; i += 1) {
  if (Number.isFinite(numericArray12[i]) === true) {
    numericArrayTempNumbers[numberElements] = numericArray12[i];
    numberElements = numberElements + 1;
  }
};

function sortItems(array) {
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < (array.length); i += 1) {
      if (array[i] < array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}
sortItems(numericArrayTempNumbers);
numericArray12 = numericArrayTempNumbers.concat(numericArrayTemp);

console.log('12. Sorted array: ' + numericArray12);



// Assignment #13
// Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.
// Írasd ki a rendezett tömböt!

const numericArray13 = [332, 2323, 3223, 11, 45, 422, 7];
function sortItems(array) {
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}
sortItems(numericArray13);
 
document.getElementById("sortedArray").innerHTML = ('Sorted array: ' + numericArray13);

let numericArray14 = numericArray13;

function checkInteger() {
  let userMessage;
  let inputValue;
  let inputValueNumber;
  inputValue = document.getElementById("integer").value;
  inputValueNumber = parseFloat(inputValue);

  if (Number.isInteger(inputValueNumber) == false) {
    userMessage = "Input invalid. Please enter a finite integer.";
    document.getElementById("result").innerHTML = userMessage;
   } else {
    userMessage = "Input OK";
    document.getElementById("result").innerHTML = userMessage;
    if (inputValueNumber >= numericArray14[(numericArray14.length-1)]) {
      numericArray14.push(inputValueNumber);
      document.getElementById("fullArray").innerHTML = ('Full array: ' + numericArray14);
    }
    for (let i = 0; i < numericArray14.length; i += 1) {
      if ((numericArray14[i] > inputValueNumber) && (i != numericArray14.length)) {
        numericArray14.splice(i, 0, inputValueNumber);
        document.getElementById("fullArray").innerHTML = ('Full array: ' + numericArray14);
        break;
      }
    }
  }
}

