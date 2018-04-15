import * as types from '../constants/ActionTypes';

var initState = {
    by: 'name',
    direction: 1
};

var sort = (state = initState, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                by: action.payload.by,
                direction: action.payload.direction
            }
    }
    return state;
}

export default sort;