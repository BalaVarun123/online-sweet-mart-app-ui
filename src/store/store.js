import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/rootReducer";
import logger from 'redux-logger'
// export default () => {
//     return createStore(rootReducer, applyMiddleware(thunk));
// };

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
  )
export default store;