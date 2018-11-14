import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { corn } from './corn.reducer';
import { milk } from './milk.reducer';
import { salad } from './salad.reducer';



const rootReducer = combineReducers({
    corn,
    milk,
    salad
});

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,  //async dispatch
        createLogger()
    )
);
