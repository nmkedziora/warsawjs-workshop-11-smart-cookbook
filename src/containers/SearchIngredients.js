import React from "react";
import { connect } from 'react-redux';
import {Dropdown} from "semantic-ui-react";
import { getNotSelectedIngredients } from '../selectors';

const SearchIngredients = ({ addIngredient, options = [] }) => {
  return (
    <div>
      <Dropdown
        placeholder="Szukaj"
        fluid
        search
        selection
        multiple
        closeOnChange
        onChange={(e, { value }) => {
          addIngredient(value[0]);
        }}
        value={[]}
        options={options}
      />
    </div>
  );
};

const mapStateToProps = state => {
  let ingredients = getNotSelectedIngredients(state);
  let options = ingredients.map(ingredient => {
    return {
      key: ingredient,
      value: ingredient,
      text: ingredient
    }
  });
  return {options}
}

export default connect(mapStateToProps, null)(SearchIngredients);
