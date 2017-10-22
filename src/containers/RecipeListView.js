import React from "react";
import { connect } from 'react-redux';
import RecipeItem from "./RecipeItem";
import Counter from "./Counter";
import {Button, Header, Item, Segment} from "semantic-ui-react";

// here you should use function as a children, using Counter component
// to display -, + and amount how many recipes should be displayed

const RecipeList = ({ recipes = [], recipeRefresh }) =>
    <div>
      <Segment clearing vertical basic>
        <Button.Group basic floated="right">
          <Button onClick={recipeRefresh} icon="refresh" />
        </Button.Group>
        <Header floated="left" as="h1">
          Dostępne przepisy:
        </Header>
      </Segment>
      <Item.Group divided>
        {recipes
          .map(item => <RecipeItem key={item.id} recipe={item} />)}
      </Item.Group>
    </div>

const mapStateToProps = state => {
  return {recipes: Object.values(state.recipes.entities)};
}

export default connect(mapStateToProps, null)(RecipeList);
