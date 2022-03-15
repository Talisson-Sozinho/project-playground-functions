/* Desafio 11 */
/* Função para formatar um array 11 números em uma string de um número telefone
*  Entrada: (array de números)
*  Saída: retorna uma string com o número formatado
*/
function arrayToPhoneNumber(array) {
  // variável que será concatenado os números do array começando com o parênteses do DDD
  let telephoneNumber = '(';
  // Estrutura de repetição para percorrer todo o array de números
  for (let index = 0; index < array.length; index += 1) {
    // caso seja o terceiro dígito, fecha o parênteses do DDD
    if (index === 2) {
      telephoneNumber += ') ';
    }
    // caso esteja no meio do número sem contar o ddd para colocar o traço
    if (index === 7) {
      telephoneNumber += '-';
    }
    // adicionando o número atual
    telephoneNumber += array[index];
  }
  // retornando a string formatada
  return telephoneNumber;
}

/* Função para verificar se tem um número repetido mais de 2 vezes
*  Entrada: (array de números)
*  Saída: retorna true para caso tenha números repedidos mais que 2 vezes e false para que não tenha
*/
function verifyHasMoreThanThreeNumbers(array) {
  // array que sera usada como auxiliar para gerar uma cópia do array de números
  const arrayCopy = [];
  // fazendo uma cópia do array de números
  for (let number of array) {
    arrayCopy.push(number);
  }
  // ordenado o array para facilitar na hora de verificar se tem número repetido
  arrayCopy.sort();
  // Estrutura de repetição para percorrer todo o array cópia
  for (let index = 1; index < arrayCopy.length - 1; index += 1) {
    // Como o array está ordenado, se tiver mais de 2 números iguais juntou é porque tem 3 números repetido
    if (arrayCopy[index] === arrayCopy[index + 1] && arrayCopy[index] === arrayCopy[index - 1]) {
      return true; // caso entra, já retorna true pois tem pelo menos 1 número repetido 3 vezes
    }
  }
  // caso não tenha um numero repedido pelo menos 3 vezes retorna false
  return false;
}

/* Função para saber se é um array de um número de telefone inválido, com um tamanho diferente de 11
*  e com alguma posição maior do que 9 ou menos que 0
*  Entrada: (array de números)
*  Saída: true para caso seja inválido ou false para que seja válido
*/
function verifyHasNumberInvalids(array) {
  // Estrutura de repetição para percorrer o array de números
  for (let number of array) {
    // caso tenha um numero negativo ou maior do que 9 no array retorna true
    if (number > 9 || number < 0) {
      return true;
    }
  }
  return false;
}

/* Função para gerar um número de telefone válido e formatado, dado um array de números
*  Entrada: (array de números)
*  Saída: retorna o número de telefone formatado ou algum erro caso o array não seja válido
*/
function generatePhoneNumber(arrayOfNumbers) {
  // Retorna um erro caso o array tenha um tamanho diferente de 11
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // Retorna um erro para caso alguma função que verifica a invalidez retorne true
  if (verifyHasNumberInvalids(arrayOfNumbers) || verifyHasMoreThanThreeNumbers(arrayOfNumbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  // retorna o a string da função que formata o número
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
