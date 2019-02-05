import * as constants from './constants';

export const getPricesRequest = () => ({
  type: constants.TYPE_PRICES_REQUEST,
});

export const getPrices = options => {
  const { prices } = options;
  return {
    type: constants.TYPE_PRICES_SUCCESS,
    prices,
  };
};
