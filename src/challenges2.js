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

/* Desafio 12 */
/* Função para verificar se tem algum lado maior que a soma dos outros dois lados.
*  Entrada: (valor numérico do lado 1, valor numérico do lado 2, valor numérico do lado 3)
*  Saída: retorna true caso tenha algum lado seja maior que a soma dos outros dois lados,
*        e false caso contrário
*/
function triangleCheckSideLongerThanOtherTwo(lineA, lineB, lineC) {
  // casos que algum lado seja maior que a soma dos outros dois lados
  if (lineA > lineB + lineC) {
    return true;
  }
  if (lineB > lineC + lineA) {
    return true;
  }
  if (lineC > lineA + lineB) {
    return true;
  }
  // retorna false caso seja menor ou igual a soma dos outros dois lados
  return false;
}

/* Função para verificar se tem algum lado menor que a diferença dos outros dois lados
*  Entrada: (valor numérico do lado 1, valor numérico do lado 2, valor numérico do lado 3)
*  Saída: retorna true caso tenha algum lado seja menos que a diferença dos outros dois lados,
*        e false caso contrário
*/
function triangleCheckSideSmallerThanAbsoluteDiferenceLongerThanOtherTwo(lineA, lineB, lineC) {
  // casos em que tenha algum lado que seja menor que o valor absoluto dos outros dois lados
  if (lineA < Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < Math.abs(lineC - lineA)) {
    return true;
  }
  if (lineC < Math.abs(lineB - lineA)) {
    return true;
  }
  // retorna false caso seja maior ou igual a diferença do outros dois lados
  return false;
}

/* Função para retornar se os valores passados por parâmetro forma um triângulo válido.
*  Entrada: (Valor 1, valor 2, valor 3)
*  Saída: retorna true para caso forme um triângulo válido e false para caso não
*/
function triangleCheck(lineA, lineB, lineC) {
  // Salvando o resultado da função que verifica se tem algum lado maior que os outros dois
  const conditionOne = triangleCheckSideLongerThanOtherTwo(
    lineA,
    lineB,
    lineC,
  );
  // Salvando o resultado da função que verifica se tem alguma lado menor que a diferença dos outros dois lados
  const conditionTwo = triangleCheckSideSmallerThanAbsoluteDiferenceLongerThanOtherTwo(
    lineA,
    lineB,
    lineC,
  );
  // caso as duas função retorne true, o triangulo não existe
  if (conditionOne && conditionTwo) {
    return false;
  }
  // true para caso o triângulo exista
  return true;
}

/* Desafio 13 */
/* Função para verificar a quantidade de água um pessoa tem que beber dado um
*  número de bebidas que tomou anteriormente.
*  Entrada: (string com o texto das bebidas)
*  Saída: uma frase dizendo o número de copos de água que terá que beber
*/
function hydrate(string) {
  // variável que sera guardada a quantidade de copos de água
  let water = 0;
  // percorrendo o array que será gerado após gerar a string em um array de palavras
  for (let word of string.split(' ')) {
    // caso tenha um número entre 0 e 10 soma o valor numérico ao número de copos de água
    if (word > 0 && word < 10) {
      water += Number(word);
    }
  }
  // para organizar a semântica do retorno
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
