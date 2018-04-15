import { combineReducers } from 'redux';
import status from './status';
import sort from './sort';

var myReducer = combineReducers({
    status,
    sort
});

export default myReducer;
