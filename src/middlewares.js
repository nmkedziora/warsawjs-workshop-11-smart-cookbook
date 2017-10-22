import { schema, normalize } from 'normalizr';

const recipes = new schema.Entity('recipes', {}, { idAttribute: 'id' });
const recipesList = new schema.Array(recipes);
const actionsSchemas = {
  RECIPES_REQUEST_SUCCESS: recipesList,
};

export const entitiesMiddleware = store => next => action => {
  // TODO - use normalizr to extract entities and order
  if (action.type === 'RECIPES_REQUEST_SUCCESS') {
    const { result, entities } = normalize(action.payload, recipesList);
    setTimeout(() => next({...action, payload: {result, recipes: entities.recipes}}), 2000);
  } else {
    return next(action);
  }
};
