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
import {
  makeSelectPrices,
  makeSelectAgencyId,
  makeSelectValid,
} from './selectors';

export function* getCategories({ agencyId }) {
  const urlAgencies = `${CONST_URL_BASE}${CONST_URL_AGENCIES}`;
  const urlCategories = `${urlAgencies}/${agencyId}/${CONST_URL_CATEGORIES}`;
  try {
    const categories = yield call(request, urlCategories);
    yield put(actions.setCategories({ categories, agencyId }));
    const { id } = categories[0];
    yield getPrices({ categoryId: id || 1 });
  } catch (e) {
    // yield put(actions.showInfo({ e }));
  }
}

export function* getAgencies() {
  const urlAgencies = `${CONST_URL_BASE}${CONST_URL_AGENCIES}`;
  try {
    const agencies = yield call(request, urlAgencies);
    yield put(actions.setAgencies({ agencies }));
    const { id } = agencies[0];
    yield getCategories({ agencyId: id || 1 });
  } catch (e) {
    // yield put(actions.showInfo({ e }));
  }
}

export function* getFiltered({ isValid }) {
  try {
    const prices = yield select(makeSelectPrices());
    const filtered = prices.filter(e => (isValid ? e.isValidated : true));
    yield put(actions.setFiltered({ filtered, isValid }));
  } catch (e) {
    // yield put(actions.showInfo({ e }));
  }
}

export function* getPrices({ categoryId }) {
  const agencyId = yield select(makeSelectAgencyId());
  const urlAgencies = `${CONST_URL_BASE}${CONST_URL_AGENCIES}`;
  const urlCategories = `${urlAgencies}/${agencyId}/${CONST_URL_CATEGORIES}`;
  const urlPrices = `${urlCategories}/${categoryId}/${CONST_URL_PRICES}`;
  try {
    const prices = yield call(request, urlPrices);
    prices.sort((a, b) => a.startDate - b.startDate);
    yield put(actions.setPrices({ prices }));
    const isValid = yield select(makeSelectValid());
    yield getFiltered({ isValid });
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
