import { applyMiddleware, createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer, { reducer } from "./reducers"
import { instaFeed } from "./reducers/instaImagesReducer"
import rootSaga from "./sagas"

const sagaMiddleWare = createSagaMiddleware({})

var composeEnhancers = compose
if (typeof window !== "undefined") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
)

sagaMiddleWare.run(rootSaga)

export default store
