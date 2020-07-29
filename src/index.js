import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// Create the rootSaga generator function
// also can be called watchSaga
function* rootSaga() {
  // This is where you register the Sagas

  yield takeEvery('GET_BASKET_DATA', getBasket);
  yield takeEvery('ADD_TO_BASKET', addFruitToBasket);
  yield takeEvery('DELETE_FROM_BASKET', deleteFromBasket);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// This function (our reducer) will be called when an
// action is dipatched. state = ['Apple'] sets the default
// value of the array.
const basketReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BASKET':
      return action.payload;
    default:
      return state;
  }
};

// --- SAGAS ---

// NOTE: must recieve an action argument.
function* getBasket(action) {
  try {
    // GETs data from server.
    const response = yield axios.get('/fruit');
    // NOTE: 'put' is the same as a dispatch to a redux reducer.
    //      This sends the response to a reducers to store it in state.
    yield put({
      type: 'SET_BASKET',
      payload: response.data,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

function* addFruitToBasket(action) {
  try {
    yield axios.post('/fruit', action.payload);
    yield put({
      type: 'GET_BASKET_DATA',
    });
  } catch (err) {
    console.log(err);
  }
}

function* deleteFromBasket(action) {
  try {
    yield axios.delete(`/fruit/${action.payload.id}`);
    yield put({
      type: 'GET_BASKET_DATA',
    });
  } catch (err) {
    console.log(err);
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    basketReducer,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
