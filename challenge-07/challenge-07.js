/*
Crie um array com 5 items (tipos variados).

RESPOSTA: var array = ['maca', 10, function funcao(){}, true, {propriedade: 'exemplo'}]


Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.

RESPOSTA: function addItem(novoItem){
    array.push(novoItem);
    return array;
}


Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.

RESPOSTA: addItem(['eu', false, function seiLa(){}]);
            (6) ["maca", 10, ƒ, true, {…}, "eu"]
            0: "maca"
            1: 10
            2: ƒ funcao()
            3: true
            4: {propriedade: "exemplo"}
            5: "eu"
            6: (3) ["eu", false, ƒ]
            length: 7
            __proto__: Array(0)


Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."

RESPOSTA: console.log('O segundo elemento do segundo array é ' + array[5][2]);

Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."

RESPOSTA: console.log('O primeiro array tem ' + array.length + ' itens');


Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."

RESPOSTA: console.log('O segundo array tem ' + array[5].length + ' itens');

Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.

RESPOSTA:

var contador = 10;
while(contador <= 20){
  contador % 2 === 0 ? console.log(contador) : ""
  contador++;
}


Na mesma ideia do exercício acima: mostre agora os números ímpares.

var contador = 10;
while(contador <= 20){
  contador % 2 !== 0 ? console.log(contador) : ""
  contador++;
}


Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.

RESPOSTA:

for(i=100; i<=120; i++){

  i % 2 === 0 ? console.log(i) : '';

}


RESPOSTA 2:

for(i=100; i<=120; i++){

  i % 2 !== 0 ? console.log(i) : '';

}

