import React from "react";
import { connect } from 'react-redux';
import {Icon, List} from "semantic-ui-react";

import { getSelectedIngredients } from '../selectors';

const SelectedIngredients = ({ ingredients = [], onDelete }) => {
  return (
    <List animated verticalAlign="middle" divided relaxed={'very'}>
      {ingredients.map(item => (
        <List.Item key={item}>
          <List.Content floated="right">
            <Icon link name="delete" onClick={() => onDelete(item)} />
          </List.Content>
          <List.Content>{item}</List.Content>
        </List.Item>
      ))}
    </List>
  );
};

const mapStateToProps = state => {
  return {ingredients: getSelectedIngredients(state)}
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: ingredient => dispatch({
      type: 'DESELECT_INGREDIENT',
      payload: ingredient
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedIngredients);
