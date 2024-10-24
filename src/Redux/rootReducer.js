import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/shopping-reducer"; //import reducers

const rootReducer = combineReducers({ 
  shop: shoppingReducer,
});

export default rootReducer; 