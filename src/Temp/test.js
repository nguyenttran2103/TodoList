import { createStore } from 'redux';
import { toggleStatus, sort } from './actions/index';
import myReducer from './reducers/index';

//var toggleAction = { type: 'TOGGLE_STATUS' };
//var sortAction = { type: 'SORT', payload: { by: 'name', direction: -1 } };

const store = createStore(myReducer);

console.log(store.getState());
store.dispatch(toggleStatus());
console.log(store.getState());
store.dispatch(sort({ by: 'status', direction: -1 }));
console.log(store.getState());