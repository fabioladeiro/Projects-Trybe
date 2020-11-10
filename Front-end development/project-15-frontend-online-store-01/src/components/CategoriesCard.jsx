import React, { Component } from 'react';

class CategoriesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie: this.props.categorie,
      products: [],
    };
  }

  render() {
    const { categorie, getProducts } = this.props;
    const { name, id } = categorie;
    return (
      <div>
        <div key={id}>
          <label htmlFor={id} data-testid="category">
            <input
              type="radio"
              id={id}
              name="categories"
              value={name}
              onClick={() => getProducts(id)}
            />
            {name}
          </label>
        </div>
      </div>
    );
  }
}

export default CategoriesCard;
