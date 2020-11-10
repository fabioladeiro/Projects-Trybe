import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
      <div>
        <h2>Avaliações</h2>
        <label htmlFor="inputEmail">Email:</label><br />
        <input type="email" /><br />
        <label htmlFor="inputText">Mensagem:</label><br />
        <input type="text" data-testid="product-detail-evaluation" /><br />
        <label htmlFor="inputRating">Dê sua nota ao produto:</label><br />
        <input type="number" min="1" max="5" /><br />
        <button>Avaliar</button>
      </div>
    );
  }
}

export default Forms;
