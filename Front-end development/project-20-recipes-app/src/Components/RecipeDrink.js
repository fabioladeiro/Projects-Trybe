import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Icons from './Icons';
import { getIngredients } from '../helpers';

const RecipeDrink = ({ detailsRecipe, pathName }) => {
  if (!detailsRecipe.drinks) return <div>div frustrante pq o teste ta errado</div>;
  const brazilianWay = detailsRecipe.drinks[0];
  const {
    strDrink, strDrinkThumb, strAlcoholic, strInstructions, ...measures
  } = brazilianWay;

  return (
    <div className="d-flex flex-column align-items-center recipe-food-margin">
      <div className="card text-white bg-dark card-meals">
        <img className="card-img-top" src={strDrinkThumb} alt={strDrink} data-testid="recipe-photo" width="200" />
        <div className="card-body d-flex flex-row justify-content-between">
          <h2 data-testid="recipe-title">{strDrink}</h2>
          <Icons pathName={pathName} detailsDrink={brazilianWay} />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center instructions">
        <h3>Category:</h3>
        <p data-testid="recipe-category">
          {strAlcoholic}
        </p>
        <h3>Ingredients:</h3>
        <div className="w-100">
          <ul data-testid="0-ingredient-name-and-measure">
            {getIngredients(measures).map(({ ingredient, measure }, index) => (
              <li data-testid={`${index}-ingredient-name-and-measure`} key={ingredient}>
                {measure}
                {' '}
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <h3>Instructions</h3>
        <p data-testid="instructions">{strInstructions}</p>
      </div>
    </div>
  );
};

RecipeDrink.propTypes = {
  detailsRecipe: PropTypes.shape({
    drinks: PropTypes.arrayOf(Object).isRequired,
  }).isRequired,
  pathName: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  detailsRecipe: state.detailsDrinksReducer.detailsDrinks,
});

export default connect(mapStateToProps)(RecipeDrink);
