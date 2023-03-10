import {createStore,compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { toDoListReducer } from './reducers/toDoListReducer';
 
const reducer = combineReducers({
  toDoListReducer
  });

  const initialState = {
      
    toDoListReducer : {
      todoItem : localStorage.getItem('todolis') ? JSON.parse(localStorage.getItem('todolis')):[]
       
    }
    
  };


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;