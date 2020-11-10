import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeHandle = this.changeHandle.bind(this);
    this.buttonFunction = this.buttonFunction.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  changeHandle(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  changeRating(event) {
    this.setState({ [event.target.name]: parseFloat(event.target.value) });
  }

  buttonFunction(state) {
    const { onClick } = this.props;
    onClick(state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" value={title} onChange={this.changeHandle} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" name="subtitle" value={subtitle} onChange={this.changeHandle} />
        <label htmlFor="image">Imagem</label>
        <input type="text" name="image" value={imagePath} onChange={this.changeHandle} />
        <label htmlFor="sinopse">Sinopse</label>
        <textarea type="text" name="sinopse"value={storyline} onChange={this.changeHandle} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" name="rating" value={rating} onChange={this.changeRating} />
        <label htmlFor="genre">Gênero</label>
        <select name="genre" value={genre} onChange={this.changeHandle}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={() => this.buttonFunction(this.state)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
