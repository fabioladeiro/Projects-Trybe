// import React, { Component } from 'react';
// import shoppingcart from '../images/shopping-cart.jpg';

// export class Busca extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { item: '' };
//     this.textChange = this.textChange.bind(this);
//   }

//   textChange(value) {
//     this.setState({ item: value.target.value });
//   }

//   textInput() {
//     const { item } = this.state;
//     if (item === '') {
//       return (
//         <div>
//           <span data-testid="shopping-cart-button">
//             <img src={shoppingcart} alt="button" />
//           </span>
//           <p data-testid="home-initial-message">
//             Digite algum termo de pesquisa ou escolha uma categoria.
//           </p>
//         </div>
//       );
//     }
//     return <p>{item}</p>;
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.textChange} />
//         {this.textInput()}
//       </div>
//     );
//   }
// }

// export default Busca;
