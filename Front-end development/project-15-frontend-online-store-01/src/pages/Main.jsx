import React, { Component } from 'react';
import * as Components from '../components';
import shoppingcart from '../images/shopping-cart.jpg';
import * as api from '../services/api';
import ProductsList from '../components/ProductsList';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { item: '', products: '' };
    this.textChange = this.textChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts(item) {
    api.getProductsFromCategoryAndQuery(false, item)
      .then((data) => this.setState({ products: data.results }));
  }

  textInput() {
    const { item } = this.state;
    if (item === '') {
      return (
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      );
    }
    return <p>{item}</p>;
  }

  textChange(value) {
    this.setState({ item: value.target.value });
  }

  render() {
    const { item, products } = this.state;
    return (
      <div>
        <div>
          <input type="text" data-testid="query-input" onChange={this.textChange} />
          <button type="button" data-testid="query-button" onClick={() => this.getProducts(item)}>
            Pesquisar
          </button>
          {this.textInput()}
        </div>
        <span data-testid="shopping-cart-button">
          <img src={shoppingcart} alt="button" />
        </span>
        <div className="categories">
          <Components.Categories />
        </div>
        <div>
          <ProductsList products={products} />
        </div>
      </div>
    );
  }
}

export default Main;
