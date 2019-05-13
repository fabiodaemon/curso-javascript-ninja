/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).

RESPOSTA: var array = ['banana', 'maca', 'uva']

*/


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.

RESPOSTA: function exemplo (parametro) {
  var parametro = array;
  return array;
    
}

*/

/*
Imprima o segundo índice do array retornado pela função criada acima.

RESPOSTA: console.log(exemplo()[0]);

*/


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.

RESPOSTA: function exemplo2(array, indice){
  
  return array[indice];

}

*/

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.

RESPOSTA: var outroArray = ['a', 32, [1,2,3], true, {objeto: 1}];

*/


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.

RESPOSTA: console.log(exemplo2(outroArray, 1));
          console.log(exemplo2(outroArray, 2));
          console.log(exemplo2(outroArray, 3));
          console.log(exemplo2(outroArray, 4));
          console.log(exemplo2(outroArray, 5));

*/


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.

RESPOSTA:

function book (nomeLivro){
    var livros = {

        'Harry Potter': {
            quantidadePaginas: 300,
            autor: 'JK Rowling',
            editora: 'LPM'
         },

		'Crepúsculo': {
			quantidadePaginas: 500,
			autor: 'Alguem',
			editora: 'Novatec'
        },
		
		'50 tons de cinza': {
			quantidadePaginas: 400,
			autor: 'alguem2',
			editora: 'cia das letras'
        }
    };

	if (!nomeLivro) {

		return livros;
    }

	return livros[nomeLivro];
};

/*

/*
Usando a função criada acima, imprima o objeto com todos os livros.

RESPOSTA: book();

*/


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"

RESPOSTA: console.log("O livro 'Harry Potter' tem " + book.('Harry Potter').quantidadePaginas + " páginas!");

*/


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."

 RESPOSTA: console.log("O autor do livro 'Harry Potter' é " + book.('Harry Potter').autor.");

*/

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."

 RESPOSTA: console.log("O autor do livro 'Harry Potter' é " + book.('Harry Potter').editora.");

*/
