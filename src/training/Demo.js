import { createStore } from 'redux';
import { status, sort } from './action/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
console.log('Default: ', store.getState());

var action = {type: 'TOGGLE_STATUS'};
store.dispatch(status());
console.log('TOGGLE_STATE: ', store.getState());



store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('SORT: ', store.getState());