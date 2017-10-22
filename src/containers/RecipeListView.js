import React from "react";
import { connect } from 'react-redux';
import RecipeItem from "./RecipeItem";
import Counter from "./Counter";
import {Button, Header, Item, Segment} from "semantic-ui-react";
import { CALL_API } from 'redux-api-middleware';
import { getFilteredRecipes } from '../selectors';

const refreshAction = {
  [CALL_API]: {
    endpoint: '/api/recipes',
    method: 'GET',
    types: ['RECIPES_REQUEST_STARTED', 'RECIPES_REQUEST_SUCCESS', 'RECIPES_REQUEST_ERROR']
  }
}
// here you should use function as a children, using Counter component
// to display -, + and amount how many recipes should be displayed
const RecipeList = ({ recipes = [], recipeRefresh }) =>
  <Counter>
    {(counter, plus, minus) =>
      <div>
        <Segment clearing vertical basic>
          <Button.Group basic floated="right">
            <Button onClick={minus} icon="minus" />
            <Button>Limit {counter}</Button>
            <Button onClick={plus} icon="plus" />
            <Button onClick={recipeRefresh} icon="refresh" />
          </Button.Group>
          <Header floated="left" as="h1">
            Dostępne przepisy:
          </Header>
        </Segment>
        <Item.Group divided>
          {recipes
            .slice(0, counter)
            .map(item => <RecipeItem key={item.id} recipe={item.id} />)}
        </Item.Group>
      </div>
    }
  </Counter>

const mapStateToProps = state => {
  return {
    recipes: getFilteredRecipes(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    recipeRefresh: () => dispatch(refreshAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
