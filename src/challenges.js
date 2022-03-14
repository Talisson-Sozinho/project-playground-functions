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

/* Desafio 8 */
/* Função para saber se o número é divisível por 3, 5 ou os dois ao mesmo tempo.
*  Entrada: (numero pra verificação)
*  Saída: retorna 'fizz' para caso seja divisível por 3, 'buzz' por 5,
*        'fizzBuzz' para caso seja divisível para os dois ao mesmo tempo
*        'bug!' para caso não seja divisível por nenhum dos dois
*/
function isFizzOrBuzz(number) {
  // Variável que será guardado a string para o retorno
  let wordForArray = '';
  // caso o número seja divisível por 3
  if (number % 3 === 0) {
    wordForArray = 'fizz';
    // e se for por 5 também, será concatenado com o Buzz
    if (number % 5 === 0) {
      wordForArray += 'Buzz';
    }
  // caso o numero seja divisível por 50
  } else if (number % 5 === 0) {
    wordForArray = 'buzz';
  // caso não seja divisível por nenhum dos dois
  } else {
    wordForArray = 'bug!';
  }
  // retornando a string resposta
  return wordForArray;
}
/* Função para dado um array de número retornar um array dizendo se o elemento é
* divisível por 3, 5 ou os dois ao mesmo tempo. Usando a regrado do fizzBuzz,
* 'fizz' para caso seja por somente por 3, 'buzz' para caso seja somente por 5,
* 'fizzBuzz' para caso seja pelos dois ao mesmo tempo e 'bug!' para nenhum dos dois.
*  Entrada: (Array de números)
*  Saída: retorna o um array com as respostas
*/
function fizzBuzz(arrayOfNumbers) {
  // Novo array que será colocado as respostas
  const arrayFizzBuzz = [];
  // Estrutura de repetição para percorrer todo o array que foi passado como parâmetro
  for (let number of arrayOfNumbers) {
    // Usando a função "isFizzOrBuzz" para ir adicionando a resposta de cada elemento no
    // array de respostas
    arrayFizzBuzz.push(isFizzOrBuzz(number));
  }
  // Retornando o array de respostas
  return arrayFizzBuzz;
}

/* Desafio 9 */
/* Função para dado um caractere, retornar se é vogal ou não.
*  Entrada: (string de 1 caractere)
*  Saída: retorna true para caso seja vogal e false se não */
function isVogal(char) {
  const vogais = ['a', 'e', 'i', 'o', 'u']; // Array com todas as vogais
  for (let vogal of vogais) { // Estrutura de repetição para percorrer o array de vogais
    if (vogal === char) { // verificando se o caractere de entrada tem é a vogal atual, se for já retorna true
      return true;
    }
  }
  return false; // se passou em todo o array e não retornou, é porque não é uma vogal
}
/* Função para dado uma vogal retornar um número correspondente.
*  Entrada: (string da vogal)
*  Saída: retorna o número correspondente da vogal */
function vogalForNumber(char) {
  const vogaisNumber = { // objeto com cada vogal sendo uma chave e o valor seu número correspondente
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return vogaisNumber[char]; // Retorna o valor correspondente a chave
}
/* Função para "encriptar" um frase trocando suas vogais por números
*  Entrada: (string da sentença )
*  Saída: string da frase encriptada */
function encode(string) {
  let stringEncoded = ''; // variável auxiliar que será colocado a string encriptada
  for (let char of string) { // Estrutura de repetição para percorrer a string normal
    if (isVogal(char)) { // verificando se estamos em uma vogal
      stringEncoded += vogalForNumber(char); // chamando a função parar dizer o número correspondente a vogal
    } else {
      stringEncoded += char; // se não for irá apenas colocar a não vogal na string auxiliar
    }
  }
  return stringEncoded; // retornando a variável que contém a sentença encriptada
}
/* Função para dado um número retornar uma vogal correspondente.
*  Entrada: (número da vogal) tem que estar entre 1 e 5
*  Saída: retorna a vogal correspondente ao número */
function numberForVogal(number) {
  const numbersVogal = { // objeto com sua chave sendo um número e valor com sua vogal correspondente
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return numbersVogal[number]; // retornando a vogal correspondente ao número
}
/* Função para decodificar uma string
*  Entrada: (string encriptada)
*  Saída: string decodificada */
function decode(string) {
  let stringDecoded = ''; // variável auxiliar que será colocado a string decodificada
  for (let char of string) { // Estrutura de repetição para percorrer a string decodificada
    if (char > 0 && char < 6) { // verificando se estamos em um número
      stringDecoded += numberForVogal(char); // chamando a função parar dizer a vogal correspondente ao número
    } else {
      stringDecoded += char; // se não for irá apenas colocar a letra na string auxiliar
    }
  }
  return stringDecoded; // retornando variável contém a sentença decodificada
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
