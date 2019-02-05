/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectAgencies = () =>
  createSelector(selectHome, homeState => homeState.get('agencies'));

const makeSelectCategories = () =>
  createSelector(selectHome, homeState => homeState.get('categories'));

const makeSelectPrices = () =>
  createSelector(selectHome, homeState => homeState.get('prices'));

const makeSelectFiltered = () =>
  createSelector(selectHome, homeState => homeState.get('filtered'));

const makeSelectAgencyId = () =>
  createSelector(selectHome, homeState => homeState.get('agencyId'));

const makeSelectValid = () =>
  createSelector(selectHome, homeState => homeState.get('isValid'));

export {
  selectHome,
  makeSelectAgencies,
  makeSelectCategories,
  makeSelectPrices,
  makeSelectFiltered,
  makeSelectAgencyId,
  makeSelectValid,
};
