import React from 'react';

class ItemsQuantity extends React.Component {
  render() {
    const { quantity } = this.props;
    return (
      <span>{quantity}</span>
    );
  }
}

export default ItemsQuantity;
