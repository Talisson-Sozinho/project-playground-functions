// Desafio 11
function arrayToPhoneNumber(array) {
  let telephoneNumber = '(';
  for (let index = 0; index < array.length; index += 1) {
    if (index === 2) {
      telephoneNumber += ') ';
    }
    if (index === 7) {
      telephoneNumber += '-';
    }
    telephoneNumber += array[index];
  }
  return telephoneNumber;
}

function verifyHasMoreThanThreeNumbers(array) {
  let arrayCopy = [];
  for (let number of array) {
    arrayCopy.push(number);
  }
  arrayCopy.sort();
  for (let index = 1; index < arrayCopy.length - 1; index += 1) {
    if (arrayCopy[index] === arrayCopy[index + 1] && arrayCopy[index] === arrayCopy[index - 1]) {
      return true;
    }
  }
  return false;
}

function verifyHasNumberInvalids(array) {
  for (let number of array) {
    if (number > 9 || number < 0) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (verifyHasNumberInvalids(arrayOfNumbers) || verifyHasMoreThanThreeNumbers(arrayOfNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return arrayToPhoneNumber(arrayOfNumbers);
}

// Desafio 12
function triangleCheckSideLongerThanOtherTwo(lineA, lineB, lineC) {
  if (lineA > lineB + lineC) {
    return true;
  }
  if (lineB > lineC + lineA) {
    return true;
  }
  if (lineC > lineA + lineB) {
    return true;
  }
  return false;
}

function triangleCheckSideSmallerThanAbsoluteDiferenceLongerThanOtherTwo(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < Math.abs(lineC - lineA)) {
    return true;
  }
  if (lineC < Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  const conditionOne = triangleCheckSideLongerThanOtherTwo(
    lineA,
    lineB,
    lineC,
  );
  const conditionTwo = triangleCheckSideSmallerThanAbsoluteDiferenceLongerThanOtherTwo(
    lineA,
    lineB,
    lineC,
  );
  if (conditionOne && conditionTwo) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let water = 0;
  for (let word of string.split(' ')) {
    if (word > 0 && word < 10) {
      console.log(word);
      water += Number(word);
    }
  }
  if (water > 1) {
    return `${water} copos de água`;
  }
  return `${water} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
