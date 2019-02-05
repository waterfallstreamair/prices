/*
 * HomeReducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  agencies: null,
  categories: null,
  prices: null,
  filtered: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.TYPE_AGENCIES_SUCCESS:
      return state.set('agencies', action.agencies);
    case constants.TYPE_CATEGORIES_SUCCESS:
      return state.set('categories', action.categories);
    case constants.TYPE_PRICES_SUCCESS:
      return state.set('prices', action.prices);
    case constants.TYPE_PRICES_FILTER_SUCCESS:
      return state.set('filtered', action.prices);
    default:
      return state;
  }
}

export default homeReducer;
