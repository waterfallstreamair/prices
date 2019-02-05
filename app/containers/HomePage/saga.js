import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import request from 'utils/request';
import {
  CONST_URL_BASE,
  CONST_URL_AGENCIES,
  CONST_URL_CATEGORIES,
  CONST_URL_PRICES,
  TYPE_PRICES_REQUEST,
  TYPE_AGENCIES_REQUEST,
  TYPE_CATEGORIES_REQUEST,
  TYPE_FILTER_REQUEST,
} from './constants';
import * as actions from './actions';
import { makeSelectPrices } from './selectors';

export function* getAgencies() {
  const urlAgencies = `${CONST_URL_BASE}${CONST_URL_AGENCIES}`;
  console.log({ urlAgencies });
  try {
    const agencies = yield call(request, urlAgencies);
    yield put(actions.setAgencies({ agencies }));
  } catch (e) {
    // yield put(actions.showInfo({ e }));
  }
}

export function* getCategories({ agencyId }) {
  const urlAgencies = `${CONST_URL_BASE}${CONST_URL_AGENCIES}`;
  const urlCategories = `${urlAgencies}/${agencyId ||
    1}/${CONST_URL_CATEGORIES}`;
  console.log({ urlCategories });
  try {
    const agencies = yield call(request, urlAgencies);
    yield put(actions.setAgencies({ agencies }));
  } catch (e) {
    // yield put(actions.showInfo({ e }));
  }
}

export function* getPrices({ agencyId, categoryId }) {
  const urlAgencies = `${CONST_URL_BASE}${CONST_URL_AGENCIES}`;
  const urlCategories = `${urlAgencies}/${agencyId ||
    1}/${CONST_URL_CATEGORIES}`;
  const urlPrices = `${urlCategories}/${categoryId || 1}/${CONST_URL_PRICES}`;
  console.log({ urlPrices });
  try {
    const prices = yield call(request, urlPrices);
    yield put(actions.setPrices({ prices }));
  } catch (e) {
    // yield put(actions.showInfo({ e }));
  }
}

export function* getFiltered({ isValid }) {
  try {
    const prices = yield select(makeSelectPrices());
    const filtered = prices.filter(e => e.isValidated === isValid);
    yield put(actions.setFilter({ filtered }));
  } catch (e) {
    // yield put(actions.showInfo({ e }));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* pricesData() {
  yield all([
    takeLatest(TYPE_AGENCIES_REQUEST, getAgencies),
    takeLatest(TYPE_CATEGORIES_REQUEST, getCategories),
    takeLatest(TYPE_PRICES_REQUEST, getPrices),
    takeLatest(TYPE_FILTER_REQUEST, getFiltered),
  ]);
}
