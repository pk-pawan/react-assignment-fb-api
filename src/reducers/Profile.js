import {actionTypes} from '../constants';

const initialState = {
    data : {}
}

const profileState = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PROFILE_DATA:
            return Object.assign({}, state, {
                data: action.payload
        });
        default:
            return state;
    }
}
export default profileState;