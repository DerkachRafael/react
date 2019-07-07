import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import logger from "redux-logger";
import rootReducer from "../reducers";
const state = {
    aa: 5,
    apple: 100
}
const middleware = applyMiddleware(thunk);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, state, reduxDevTools(middleware));

export default store;
