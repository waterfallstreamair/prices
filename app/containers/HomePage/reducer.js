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
  agencyId: null,
  isValid: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.TYPE_AGENCIES_SUCCESS:
      return state.set('agencies', action.agencies);
    case constants.TYPE_CATEGORIES_SUCCESS:
      return state
        .set('categories', action.categories)
        .set('agencyId', action.agencyId);
    case constants.TYPE_PRICES_SUCCESS:
      return state.set('prices', action.prices);
    case constants.TYPE_FILTER_SUCCESS:
      return state
        .set('filtered', action.filtered)
        .set('isValid', action.isValid);
    default:
      return state;
  }
}

export default homeReducer;
