import React from 'react';
import shoppingcart from '../images/shopping-cart.jpg';

export default class Shopping extends React.Component {
  render() {
    return (
      <div>
        <h3>Carrinho de Compras</h3>
        <img src={shoppingcart} alt="cart" />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}
