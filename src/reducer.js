import { combineReducers } from 'redux';
import { mergeEntities } from './utils'
import { uniq, without } from 'lodash';

const recipes = (state = {order: [], entities: {}, loading: false}, action) => {
  switch (action.type) {
    case 'RECIPES_REQUEST_STARTED':
      return {...state, loading: true};
    case 'RECIPES_REQUEST_SUCCESS':
      return {...state, entities: action.payload.recipes, loading: false};
      case 'RECIPES_REQUEST_ERROR':
        return {...state, loading: false};
    default:
      return state;
  }
};

const isAppLoading = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const selectedIngredients = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_INGREDIENT':
      return uniq([...state, action.payload]);
    case 'DESELECT_INGREDIENT':
      return without(state, action.payload);
    default:
      return state;
  }
};

const shops = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const basket = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  recipes,
  shops,
  basket,
  selectedIngredients,
  isAppLoading,
});
