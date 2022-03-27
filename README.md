# Boas vindas ao repositório do Projeto Playground Functions!
  Aqui está um projeto que desenvolvi ao fim do bloco 04 do curso da [Trybe](https://www.betrybe.com/).
  
# Avaliação feita pela trybe

<img src='https://user-images.githubusercontent.com/79944385/160265373-f4c253e4-74b8-4ecb-ab4b-c418f85900cc.png'>

# Habilidades usadas

- Escrever códigos em JavaScript que usam variáveis e tipos primitivos;
- Utilizar conceitos da linguagem como a tipagem dinâmica e operadores lógicos/aritméticos/de atribuição no seu código;
- Criar códigos que usam estruturas condicionais, como o if/else ;
- Manipular arrays (listas);
- Utilizar o comando for ;
- Quebrar grandes problemas em pequenos;
- Utilizar a lógica de programação na resolução de problemas;
- Manipular objetos;
- Utilizar o comando for/in ;
- Utilizar funções para organizar e estruturar o seu código;

## Descrição das funções que está no código

### 1 - Função usando o operador &&

JavaScript possui um operador lógico `&&`, o qual recebe dois valores e retorna `true` se ambos os valores são verdadeiros, e retorna `false` se algum dos valores não o for.

Função `compareTrue`, um código que ao receber dois parâmetros booleanos deve:

- Retornar `true` se ambos os valores forem verdadeiros;
- Retornar `false` se um ou ambos os parâmetros forem falsos.

### 2 - Função que calcula a área de um triângulo

Função com o nome `calcArea` que receba um valor de base (chamado `base`) e outro de altura (chamado `height`) de um triângulo e retorne o cálculo da sua área.

### 3 - Função que divida a frase

Função com o nome `splitSentence`, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

### 4 - Função que use concatenação de strings

Função com o nome `concatName` que, ao receber uma array de strings, retorne uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array.

### 5 - Função que calcule a quantidade de pontos no futebol

Escreva uma função com o nome `footballPoints` que receba o número de vitórias (esse parâmetro deverá se chamar `wins`) e o número de empates (esse parâmetro deverá se chamar `ties`) e retorne a quantidade de pontos que o time marcou em um campeonato.

Por tanto, Cada vitória vale 3 pontos e cada empate vale 1 ponto.

### 6 - Função que calcule a repetição do maior número

Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.

### 7 - Função de Caça ao Rato

Função chamada `catAndMouse` que, ao receber a posição de `mouse`, `cat1` e `cat2`, **nessa ordem**, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

### 8 - Função FizzBuzz

Função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:

- Para cada número do Array que seja divisível apenas por 3, apresente uma string `"fizz"`;
- Para cada número do Array que seja divisível apenas por 5, apresente uma string `"buzz"`;
- Caso o número seja divisível por 3 e 5, retorne a string `"fizzBuzz"`;
- Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

### 9 - Função que Codifique e Decodifique

A primeira se chama `encode` e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5

A segunda função se chama `decode` e faz o contrário de `encode` - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de `decode` seja `"h3 th2r2!"`, o retorno deverá ser `"hi there!"`).

### 10 - Função de Lista de Tecnologias

Função que recebe um array de nomes de tecnologias. Essa função deve receber também um segundo parâmetro chamado `name` com um nome.

A saída da sua função é uma lista de objetos ordenada pelo campo `tech`.

Caso o array venha vazio a função retorna 'Vazio!'

### 11 - Função de Número de Telefone

Função chamada `generatePhoneNumber` que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

### 12 -Função de Condição de existência de um triângulo

Um triângulo é composto de três linhas: `lineA`, `lineB` e `lineC`. Crie uma função chamada `triangleCheck` que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

### 13 -Função de boas vindas ao Bar da Trybe!

Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Função `hydrate` que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber.
