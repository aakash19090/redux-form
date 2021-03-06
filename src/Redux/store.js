import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    // Other Reducers here
    form : formReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));


export default store