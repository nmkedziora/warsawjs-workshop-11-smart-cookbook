import React from "react";
import { connect } from 'react-redux';
import {Icon, List} from "semantic-ui-react";

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
  return {selectedIngredients: state.selectedIngredients}
}

export default connect(mapStateToProps)(SelectedIngredients);
