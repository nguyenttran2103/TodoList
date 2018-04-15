import * as types from '../constants/ActionTypes';

export const toggleStatus = () => {
    return {
        type: types.TOGGLE_STATUS
    };
}

export const sort = (sort) => {
    return {
        type: types.SORT,
        payload: {
            by: sort.by,
            direction: sort.direction
        }
    }
}