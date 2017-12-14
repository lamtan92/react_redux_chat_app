import {logger} from 'redux-logger';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const connection = (state = {connected : false, user: null}, action) => {
    switch(action.type){
        case 'CONNECTION_STARTED':
            return {connected: false, user: null};
        case 'CONNECTION_PENDING':
            return {connected: false, user: null};
        case 'CONNECTION_FULFILLED':
            return {connected: true, user: action.payload};
        case 'CONNECTION_COMPLETED':
            return {connected: true, user: action.payload};
        default: 
            return state;
    }
}

const channels = (state = {loading: false, channels: []}, action) => {
    switch(action.type){
        case 'FETCH_CHANNELS_PENDING' :
            return {loading: true, channels: []};
        case 'FETCH_CHANNELS_FULLFILLED':
            return {loading: false, channels: action.payload};
        default:
            return state;
    }
}

const reducers = combineReducers({
    connection,
    channels
})

const middleware = applyMiddleware(
    thunk,
    promiseMiddleware()
)

export default createStore(reducers, middleware);