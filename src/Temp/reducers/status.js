import * as types from '../constants/ActionTypes';

var initState = false;

var status = (state = initState, action) => {
    switch (action.type) {
        case types.TOGGLE_STATUS:
            return !state;
    }
    return state;
}

export default status;