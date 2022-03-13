/* Desafio 1 */
/* Função para comparar duas entradas boolean.
*  Entrada: (primeiro parâmetro boolean, segundo parâmetro boolean)
*  Saída: retorna true caso os dois parâmetros sejam true ou retorna false caso algum seja false
*/
function compareTrue(parameterBoolean1, parameterBoolean2) {
  // Retornando o resultado da comparação lógica pois retornará false caso algum seja false,
  // se não retorna true.
  return parameterBoolean1 && parameterBoolean2;
}

/* Desafio 2 */
/* Função para calcular a Área de um triângulo.
*  Entrada: (Número da base, Número da altura)
*  Saída: retorna a área do triângulo
*/
function calcArea(base, height) {
  // Cálculo da área de um triângulo
  const area = (base * height) / 2;
  // retornando o resultado do cálculo
  return area;
}

/* Desafio 3 */
/* Função para dado uma frase, irá separar as palavras e colocar em um array de palavras
*  Entrada: (Frase no formato de string)
*  Saída: retorna um array com cada posição do array, uma palavra da frase
*/
function splitSentence(setence) {
  // Usando o método de string que irar colocar em cada posição de um array toda a parte da string
  // que está entre o parâmetro que foi passado. No caso dessa função que vai separar por palavra,
  // é a cada espaço
  const arrayOfWords = setence.split(' ');
  // Retorna o array com as palavras que foram separadas em um array
  return arrayOfWords;
}

/* Desafio 4 */
/* Função para retornar uma string com a última palavra do array e a do primeiro respectivamente
*  Entrada: (array de strings)
*  Saída: retorna a string com as duas palavras
*/
function concatName(arrayOfString) {
  // Constante que receberá a string concatenada da última posição do array com a primeira respectivamente
  const arrayConcatenated = `${arrayOfString[arrayOfString.length - 1]}, ${arrayOfString[0]}`;
  // Retornando a constante com o valor
  return arrayConcatenated;
}

/* Desafio 5 */
/* Função para contar quantos pontos um time fez em um campeonato
*  Entrada: (quantidades de vitória, quantidades de empate)
*  Saída: retorna a somatória de pontos
*/
function footballPoints(wins, ties) {
  // cálculo dos pontos e colocando na constante para ser retornado
  const points = wins * 3 + ties;
  // retornando a soma de pontos
  return points;
}

/* Desafio 6 */
/* Função para retornar quantas vezes se repetiu o maior número
*  Entrada: (array de números)
*  Saída: Números de vezes que o maior número se repetiu
*/
function highestCount(arrayOfNumbers) {
  // Objeto para guardar o maior número e quantas vezes ele se repetiu
  const higherNumber = {
    number: -Infinity,
    repeated: 0,
  };
  // Estrutura de repetição para percorrer todo o array
  for (let number of arrayOfNumbers) {
    // Caso o número atual seja maior do que o que era considerado maior antes, irá fazer a substituição
    if (number > higherNumber.number) {
      higherNumber.number = number;
      higherNumber.repeated = 0;// inicializar em 0 pois vai adicionar no if posterior
    }
    // Caso o número atual seja igual ao que era considerado o maior antes, irá adicionar 1 na quantidade de repetição
    if (higherNumber.number === number) {
      higherNumber.repeated += 1;
    }
  }
  return higherNumber.repeated; // retorna a quantidade de repetição do maior número
}

/* Desafio 7 */
/* Função para verificar qual gato chegará primeiro em um rato
*  Entrada: (posição do rato, posição do gato 1, posição do gato 2)
*  Saída: retorna uma string com o nome de qual vai ganhar ou se os gatos irão se trombar
*/
function catAndMouse(mouse, cat1, cat2) {
  // Inicializando constantes com o valor da distancia dos gatos para o rato
  // o método .abs foi usado para deixar o valor da subtração positiva
  const differenceMouseCat1 = Math.abs(mouse - cat1);
  const differenceMouseCat2 = Math.abs(mouse - cat2);
  // condições para saber qual dos dois chegam primeiro
  if (differenceMouseCat1 < differenceMouseCat2) {
    return 'cat1';
  }
  if (differenceMouseCat1 > differenceMouseCat2) {
    return 'cat2';
  }
  // caso não tenha retornado nenhum dos dois gatos é porque eles estavam na mesma posição e ele se trombam
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function isFizzOrBuzz(number) {
  let wordForArray = '';
  if (number % 3 === 0) {
    wordForArray = 'fizz';
    if (number % 5 === 0) {
      wordForArray += 'Buzz';
    }
  } else if (number % 5 === 0) {
    wordForArray = 'buzz';
  } else {
    wordForArray = 'bug!';
  }
  return wordForArray;
}
function fizzBuzz(arrayOfNumbers) {
  let arrayFizzBuzz = [];
  for (let number of arrayOfNumbers) {
    arrayFizzBuzz.push(isFizzOrBuzz(number));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function isVogal(char) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  for (let vogal of vogais) {
    if (vogal === char) {
      return true;
    }
  }
  return false;
}

function vogalForNumber(char) {
  switch (char) {
  case 'a':
    return 1;
  case 'e':
    return 2;
  case 'i':
    return 3;
  case 'o':
    return 4;
  default:
    return 5;
  }
}

function encode(string) {
  let stringEncoded = '';
  for (let char of string) {
    if (isVogal(char)) {
      stringEncoded += vogalForNumber(char);
    } else {
      stringEncoded += char;
    }
  }
  return stringEncoded;
}

function numberForVogal(number) {
  switch (number) {
  case 1:
    return 'a';
  case 2:
    return 'e';
  case 3:
    return 'i';
  case 4:
    return 'o';
  default:
    return 'u';
  }
}

function decode(string) {
  let stringDecoded = '';
  for (let char of string) {
    if (char > 0 && char < 6) {
      stringDecoded += numberForVogal(Number(char));
    } else {
      stringDecoded += char;
    }
  }
  return stringDecoded;
}

// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0) return 'Vazio!';
  let arrayOfObjects = [];
  for (let tech of arrayTech.sort()) {
    arrayOfObjects.push({ tech, name });
  }
  return arrayOfObjects;
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
