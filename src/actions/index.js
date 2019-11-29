import {actionTypes} from '../constants';
import {accessToken} from '../config';


export const getProfileDetails = () => {
    return (dispatch) => {
        fetch(`https://graph.facebook.com/me?fields=id,name,birthday,email,gender&access_token=${accessToken}`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: actionTypes.SET_PROFILE_DATA,
                payload: res
            })
        })
    }
}

export const getAlbumDetails = () => {
    return (dispatch) => {
        fetch(`https://graph.facebook.com/me/albums?fields=id,name,photos{images{source}}&access_token=${accessToken}`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: actionTypes.SET_ALBUM_DATA,
                payload: res.data
            })
        })
    }
}

