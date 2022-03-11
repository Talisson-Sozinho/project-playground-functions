// Desafio 1
function compareTrue(parameterBoolean1, parameterBoolean2) {
  if (parameterBoolean1 && parameterBoolean2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(setence) {
  let arrayOfWords = setence.split(' ');
  return arrayOfWords;
}

// Desafio 4
function concatName(arrayOfString) {
  let arrayConcatenated = '';
  arrayConcatenated = `${arrayOfString[arrayOfString.length - 1]}, ${arrayOfString[0]}`;
  return arrayConcatenated;
}

// Desafio 5
function footballPoints(wins, ties) {
  let sumOfPoints = 0;
  sumOfPoints = wins * 3 + ties;
  return sumOfPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highestNumber = -Infinity;
  let countOfHighNumber = 0;

  for (let number of arrayOfNumbers) {
    if (number > highestNumber) {
      highestNumber = number;
      countOfHighNumber = 0;
    }
    if (highestNumber === number) {
      countOfHighNumber += 1;
    }
  }
  return countOfHighNumber;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
