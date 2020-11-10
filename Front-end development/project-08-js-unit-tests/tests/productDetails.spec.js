/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.    
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.entries(productDetails('Alcool gel', 'Máscara')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara')[0] && typeof productDetails('Alcool gel', 'Máscara')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1], true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const arrayOne = (productDetails('Alcool gel', 'Máscara')[0].details.productId);
    const join = arrayOne[arrayOne.length -3] + arrayOne[arrayOne.length -2] + arrayOne[arrayOne.length -1];
    const arrayTwo = (productDetails('Alcool gel', 'Máscara')[1].details.productId);
    const joinTwo = arrayTwo[arrayTwo.length -3] + arrayTwo[arrayTwo.length -2] + arrayTwo[arrayTwo.length -1];
    assert.strictEqual(join == joinTwo, true);
  });
});