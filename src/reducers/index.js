import {combineReducers} from 'redux';
import profile from './Profile';
import album from './Album';

const reducers = combineReducers({
    profile,
    album
})

export default reducers;