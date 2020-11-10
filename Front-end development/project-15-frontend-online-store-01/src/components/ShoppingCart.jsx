import React from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.cartItems };
  }

  render() {
    const { cartItems, addItem, decreaseItem } = this.props;
    if (cartItems.length < 1) return <EmptyCart />;
    return (
      <div>
        <h3>Carrinho de Compras</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <button data-testid="product-increase-quantity" onClick={() => addItem(item)}>+</button>
            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
            <button
              data-testid="product-decrease-quantity"
              onClick={() => decreaseItem(item)}
            >-
            </button>
          </div>
        ))}
        <Link to={{ pathname: '/checkout', state: { cartItems } }}>
          <button data-testid="checkout-products">Finalizar compra</button>
        </Link>
      </div>
    );
  }
}

