import { createStore, combineReducers } from 'redux';
import students from '../reducers/students-reducer';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(combineReducers({
  students,
}), reduxDevtools);

export default store;
