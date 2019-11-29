import {actionTypes} from '../constants';

const initialState = {
    data : {}
}

const albumState = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ALBUM_DATA:
            return Object.assign({}, state, {
                data: action.payload
        });
        default:
            return state;
    }
}
export default albumState;