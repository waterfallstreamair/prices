import * as constants from './constants';

export const getAgenciesRequest = () => ({
  type: constants.TYPE_AGENCIES_REQUEST,
});

export const setAgencies = ({ agencies }) => ({
  type: constants.TYPE_AGENCIES_SUCCESS,
  agencies,
});

export const getCategoriesRequest = ({ agencyId }) => ({
  type: constants.TYPE_CATEGORIES_REQUEST,
  agencyId,
});

export const setCategories = ({ categories }) => ({
  type: constants.TYPE_CATEGORIES_SUCCESS,
  categories,
});

export const getPricesRequest = ({ agencyId, categoryId }) => ({
  type: constants.TYPE_PRICES_REQUEST,
  agencyId,
  categoryId,
});

export const setPrices = ({ prices }) => ({
  type: constants.TYPE_PRICES_SUCCESS,
  prices,
});

export const getFilteredRequest = ({ isValid }) => ({
  type: constants.TYPE_FILTER_REQUEST,
  isValid,
});

export const setFiltered = ({ filtered }) => ({
  type: constants.TYPE_FILTER_SUCCESS,
  filtered,
});
