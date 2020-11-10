import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    const { cartItems } = this.props.location.state;
    return (
      <div>{cartItems.map((item) => (
        <div key={item.id}>
          <h3 data-testid="product-detail-name">{item.title}</h3>
          <img src={item.thumbnail} alt="product" /><h3>{item.price}</h3>
          <h4>{item.quantity}</h4>
        </div>
        ))}
        <p>Total: {cartItems.reduce((acc, item) => {
          const total = acc + (item.price * item.quantity);
          return (Number(total.toFixed(2)));
        }, 0)}</p>
        <div>
          <label htmlFor="name">Nome completo</label><br />
          <input data-testid="checkout-fullname" type="text" /><br />
          <label htmlFor="email">Email</label><br />
          <input data-testid="checkout-email" type="email" /><br />
          <label htmlFor="cpf">CPF</label><br />
          <input data-testid="checkout-cpf" type="text" /><br />
          <label htmlFor="telefone">Telefone</label><br />
          <input data-testid="checkout-phone" type="text" /><br />
          <label htmlFor="cep">CEP</label><br />
          <input data-testid="checkout-cep" type="text" /><br />
          <label htmlFor="adress">Endereço</label><br />
          <input data-testid="checkout-address" type="text" /><br />
          <button>Confirmar compra</button>
        </div>
      </div>
    );
  }
}

export default Checkout;
