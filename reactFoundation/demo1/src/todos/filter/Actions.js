import * as ActionTypes from './ActionTypes';

export const setFilter = filterType => ({
    type: ActionTypes.SET_FILTER,
    filter: filterType
})