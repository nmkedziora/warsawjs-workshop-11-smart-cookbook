import React from 'react';
import { connect } from 'react-redux';
import { Label, Icon } from 'semantic-ui-react';
import { includes } from 'lodash';

const IngredientsItem = ({ name, isSelected, selectIngredient }) =>
  <Label
    color={isSelected ? 'green' : undefined}
    onClick={() => selectIngredient(name, isSelected)}
    basic as="a">
    {isSelected && <Icon name="checkmark" />}
    {name}
  </Label>

const mapStateToProps = (state, ownProps) => {
    return {
      isSelected: includes(state.selectedIngredients, ownProps.name)
    }
}

const mapDispatchToProps = dispatch => {
  return {
    selectIngredient: (ingredient, isSelected) => {
      if (isSelected) {
        return dispatch({
          type: 'DESELECT_INGREDIENT',
          payload: ingredient
        })
      }
      return dispatch({
        type: 'SELECT_INGREDIENT',
        payload: ingredient
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsItem);
