import React, { Component } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import ItemsQuantity from '../components/ItemsQuantity';
import Forms from '../components/Forms';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: this.props.location.state.cartItems,
      quantity: this.props.location.state.quantity,
    };
    this.addToCart = this.addToCart.bind(this);
    this.addItem = this.addItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
  }

  addToCart(product) {
    this.setState((state) => ({
      cartItems: [...state.cartItems, product],
      quantity: state.quantity + 1,
    }));
  }

  addItem(product) {
    const element = product;
    if (element.available_quantity > element.quantity) {
      element.quantity += 1;
    }
    this.setState((state) => ({ cartItems: [...state.cartItems] }));
  }

  decreaseItem(product) {
    const element = product;
    if (element.quantity > 1) {
      element.quantity -= 1;
    }
    this.setState((state) => ({ cartItems: [...state.cartItems] }));
  }

  render() {
    const { availableQuantity } = this.props.location.state.available_quantity;
    const { id, title, thumbnail, price, available_quantity } = this.props.location.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={thumbnail} alt="product" />
        <h3>Preço: {price}</h3>
        <h4>Estoque disponível: {availableQuantity}</h4>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={() =>
            this.addToCart({ id, title, thumbnail, price, available_quantity, quantity: 1 })}
        > Adicionar ao Carrinho
        </button>
        <div>
          <ShoppingCart
            cartItems={this.state.cartItems} addItem={this.addItem} decreaseItem={this.decreaseItem}
          />
          <button style={{ display: 'none' }} data-testid="shopping-cart-button" />
        </div>
        <div>
          <span style={{ display: 'none' }} data-testid="shopping-cart-size">4</span>
          <ItemsQuantity quantity={this.state.quantity} />
        </div>
        <Forms />
      </div>
    );
  }
}

export default Details;
