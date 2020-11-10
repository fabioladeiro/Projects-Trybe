import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import ItemsQuantity from './ItemsQuantity';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [], quantity: 0 };
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
    const { cartItems, quantity } = this.state;
    const { products } = this.props;
    if (!products) return <div />;
    return (
      <div>
        {products.map(({ id, title, thumbnail, price, available_quantity, shipping }) => (
          <div data-testid="product" key={id}>
            <p>{title}</p><img src={thumbnail} alt="produto" /><p>{`R$ ${price.toFixed(2)}`}</p>
            {(shipping.free_shipping) ? <p data-testid="free-shipping">Frete grátis!</p> : <p />}
            <Link
              to={{
                pathname: `/details/${id}`,
                state: { title, thumbnail, price, available_quantity, cartItems, quantity },
              }}
            ><p data-testid="product-detail-link">Ver Detalhes</p>
            </Link>
            <button
              data-testid="product-add-to-cart"
              onClick={() =>
                this.addToCart({ id, title, thumbnail, price, available_quantity, quantity: 1 })}
            >Adicionar ao Carrinho</button>
          </div>
        ))}
        <div>
          <ShoppingCart
            cartItems={cartItems} addItem={this.addItem} decreaseItem={this.decreaseItem}
          />
        </div><div data-testid="shopping-cart-size"><ItemsQuantity quantity={quantity} /></div>
      </div>
    );
  }
}

export default ProductsList;
