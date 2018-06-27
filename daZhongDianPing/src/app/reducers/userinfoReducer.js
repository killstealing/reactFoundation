import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
        console.log('state '+JSON.stringify(state));
        console.log('action '+JSON.stringify(action));
            return action.data
        default:
            return state
    }
}