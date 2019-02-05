import { call, put, takeLatest, all /* select */ } from 'redux-saga/effects';
import request from 'utils/request';
import {
  CONST_URL_BASE,
  CONST_URL_AGENCIES,
  CONST_URL_CATEGORIES,
  CONST_URL_PRICES,
  TYPE_PRICES_REQUEST,
} from './constants';
import * as actions from './actions';
// import { makeSelectPrices } from './selectors';

export function* getPrices() {
  const agencyId = 1;
  const categoryId = 1;
  const urlAgencies = `${CONST_URL_BASE}${CONST_URL_AGENCIES}`;
  const urlCategories = `${urlAgencies}/${agencyId}/${CONST_URL_CATEGORIES}`;
  const urlPrices = `${urlCategories}/${categoryId}/${CONST_URL_PRICES}`;
  console.log({ urlPrices });
  try {
    const prices = yield call(request, urlPrices);
    yield put(actions.setPrices({ prices }));
  } catch (e) {
    // yield put(actions.showInfo({ e }));
  }
}
/*
export function* setPricesFilter(action) {
  const { isValid } = action;
  try {
    const prices = yield select(makeSelectPrices());
    const filtered = prices.filter(e => e.isValid)
    yield put(actions.setPricesFilter({ filtered }));
  } catch (e) {
    // yield put(actions.showInfo({ e }));
  }
}
*/
/**
 * Root saga manages watcher lifecycle
 */
export default function* pricesData() {
  yield all([
    // takeLatest(TYPE_AGENCIES_REQUEST, getAgencies),
    // takeLatest(TYPE_CATEGORIES_REQUEST, getCategories),
    takeLatest(TYPE_PRICES_REQUEST, getPrices),
    // takeLatest(TYPE_PRICES_FILTER_REQUEST, setPricesFilter),
  ]);
}
