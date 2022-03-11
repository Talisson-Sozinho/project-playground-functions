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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
