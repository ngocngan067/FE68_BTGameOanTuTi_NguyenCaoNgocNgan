import { createStore, combineReducers } from 'redux'
import gameOanTuTiReducer from './reducers/GameOanTuTiReducers';

const rootReducer = combineReducers({
    gameOanTuTiReducer,
})
const store = createStore(
    rootReducer,
    // Config redux dev tool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;