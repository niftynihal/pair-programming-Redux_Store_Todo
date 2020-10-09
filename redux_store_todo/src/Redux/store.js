import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import reducer from './reducer'
import authreducer from './authreducer'

const rootReducer = combineReducers({ auth : authreducer, app : reducer})

const logger = state => next => action => {
    console.log(' dispatching the action ', action);
    return next(action);
}

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer, 
    createComposer(
        applyMiddleware(
            logger,
        )
    )
)


// export const store = createStore(rootReducer)