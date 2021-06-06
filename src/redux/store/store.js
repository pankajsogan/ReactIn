import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import appReducer from "../reducers/_appReducer"

const composeEnhancer = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();

const middleWares = [thunk,logger];

const configureStore= ()=>{
    const store = createStore(
        combineReducers({
            appReducer: appReducer
        }),
        composeEnhancer(applyMiddleware(...middleWares))
    );

    return store;
}

export default configureStore;