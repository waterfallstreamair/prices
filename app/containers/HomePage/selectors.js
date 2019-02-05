/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectPrices = () =>
  createSelector(selectHome, homeState => homeState.get('prices'));

export { selectHome, makeSelectPrices };
