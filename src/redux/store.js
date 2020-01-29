import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// import createSagaMiddleware from "redux-saga";
// import rootSage from "./root-saga";

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer);

// sagaMiddleware.run(rootSage);

export default store;
