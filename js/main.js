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
document.getElementById("Array1").innerHTML = ('Array: ' + numericArray);
document.getElementById("Array1Mod").innerHTML = ('Smallest element in the array: ' + minValue);

//Assigment #2//
//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!//

const numericArray2 = [23, 345, 11110, 452, 452, 452, 2345, 11, 12];
let maxValue = numericArray2[0];
for (let i = 1; i < numericArray2.length; i += 1) {
  if (maxValue < numericArray2[i]) {
    maxValue = numericArray2[i];
  }
};
document.getElementById("Array2").innerHTML = ('Array: ' + numericArray2);
document.getElementById("Array2Mod").innerHTML = ('Biggest element in the array: ' + maxValue);


//Assigment #3//
///Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

const numericArray3 = [10, 235223, 235223, 52225, 122, 4, 4];
let sum = 0;
for (let i = 0; i < numericArray3.length; i += 1) {
  sum = sum + numericArray3[i];
};
document.getElementById("Array3").innerHTML = ('Array: ' + numericArray3);
document.getElementById("Array3Mod").innerHTML = ('Average of the array: ' + sum / numericArray3.length);



//Assigment #4//
/// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!

const numericArray4 = [10, 235223, 235223, 52225, 122, 4, 4];
let sum2 = 0;
for (let i = 0; i < numericArray4.length; i += 1) {
  sum2 = sum2 + numericArray4[i];
};
document.getElementById("Array4").innerHTML = ('Array: ' + numericArray4);
document.getElementById("Array4Mod").innerHTML = ('Sum of the array: ' + sum2);



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
document.getElementById("Array5").innerHTML = ('Array: ' + numericArray5);
document.getElementById("Array5Mod").innerHTML = ('5. Number of even elements: ' + numberOfEvenElements);


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
document.getElementById("Array6").innerHTML = ('Array: ' + numericArray6);
document.getElementById("Array6Mod").innerHTML = ('Second smallest element in the array: ' + minSecondValueArray6);

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

document.getElementById("Array7").innerHTML = ('Array: ' + numericArray7);
document.getElementById("Array7Mod").innerHTML = ('Third biggest element in the array: ' + maxThirdValue);

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
document.getElementById("Array8").innerHTML = ('Array: ' + numericArray8);
document.getElementById("Array8Mod").innerHTML = ('Contains 23: ' + contains23);


//Assigment #9//
// Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!

const numericArray9 = [1, 13, 4, 1, 3, 321, 23, 232, 33, 13];
numericArray9.sort((a, b) => a - b);
document.getElementById("Array9").innerHTML = ('Array: ' + numericArray8);

let searchTarget = function (array, target) {
  let min = 0;
  let max = array.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((max + min) / 2);

    if (array[guess] === target) {
      return document.getElementById("Array9Mod").innerHTML = ('Contains 23');
    }
    else if (array[guess] < target) {
      min = guess + 1;
    }
    else {
      max = guess - 1;
    }

  }
  return document.getElementById("Array9Mod").innerHTML = ('Does not contain 23');
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
document.getElementById("Array10").innerHTML = ('Array: ' + numericArray10);
document.getElementById("Array10Mod").innerHTML = ('Contains 23: ' + contains1023 + ' times');


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
document.getElementById("Array11").innerHTML = ('Array: ' + numericArray11);
sortItems(numericArray11);
document.getElementById("Array11Mod").innerHTML = ('Sorted array: ' + numericArray11);


// Assignment #12
// Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!

let numericArray12 = [101, 10.4, 23, 25, '2', 2352, 123, 'John', 122, true, false];
document.getElementById("Array12").innerHTML = ('Array: ' + numericArray12);
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
document.getElementById("Array12Mod").innerHTML = ('Sorted array: ' + numericArray12);



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

//Assignment #14
// Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!

let array14 = ['big', 'small', 332, 12, 'next', 7];
document.getElementById("Array14").innerHTML = ('Original array: ' + array14);

let array14String = [];
let array14Number = [];
let array14Final = [];
let numberTemp = 0;

for (let i = 0; i < array14.length; i += 1) {
  if (Number.isFinite(array14[i]) === false) {
    array14String[numberTemp] = array14[i];
    numberTemp = numberTemp + 1;
  }
};

numberTemp = 0;
for (let i = 0; i < array14.length; i += 1) {
  if (Number.isFinite(array14[i]) === true) {
    array14Number[numberTemp] = array14[i];
    numberTemp = numberTemp + 1;
  }
};

for (let i = 0; (i < array14.length / 2); i += 1) {
  array14Final.push(array14Number[i],array14String[i]);
};

document.getElementById("Array14Mod").innerHTML = ('Final array: ' + array14Final);

// Assignment #15
// Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!

const numericArray15 = [1, 13, 4, 1, 3, 321, 23, 232, 34, 13];
document.getElementById("Array15").innerHTML = ('Array: ' + numericArray15);
let numericArray15Odd = [];
let numericArray15Even = [];

for (let i = 0; i < numericArray15.length; i += 1) {
  if (numericArray15[i] % 2 == 0) {
    numericArray15Even.push(numericArray15[i]);
  } else {
    numericArray15Odd.push(numericArray15[i]);
  }
};

document.getElementById("Array15Mod").innerHTML = ('Even numbers of the array: ' + numericArray15Even);
document.getElementById("Array15Mod2").innerHTML = ('Odd numbers of the array: ' + numericArray15Odd);

//Assigmnent #16
// Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét, és descartes szorzatát. Írassuk ki az új tömböket!

const finalArray1 = [1,3,14,91,88,100,32,9];
const finalArray2 = [8,5,14,199,18,103,32,94];
document.getElementById("Array16a").innerHTML = ('First array: ' + finalArray1);
document.getElementById("Array16b").innerHTML = ('Second array: ' + finalArray2);

let finalArrayIntersection = finalArray1.filter(x => finalArray2.includes(x));
document.getElementById("Array16r1").innerHTML = ('Intersection: ' + finalArrayIntersection);

let finalArrayUnion = [...new Set([...finalArray1, ...finalArray2])];
document.getElementById("Array16r2").innerHTML = ('Union: ' + finalArrayUnion);

let finalArrayDifference = finalArray1.filter(x => !finalArray2.includes(x));
document.getElementById("Array16r3").innerHTML = ('Difference: ' + finalArrayDifference);

let finalArrayCartesian = [];
for (var i = 0; i < finalArray1.length; i++) {
  for (var j = 0; j < finalArray2.length; j++) {
      finalArrayCartesian.push(finalArray2[j] + ' ' + finalArray1[i]);
  }
}
document.getElementById("Array16r4").innerHTML = ('Cartesian product: ' + finalArrayCartesian);