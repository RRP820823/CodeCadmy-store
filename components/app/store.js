
import { createStore, combineReducers } from "redux"
// Import the slice reducers here.
import { inventoryReducer } from "../features/inventory/inventorySlice.js"

import { cartReducer } from "../features/cart/cartSlice.js"

import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice.js"


const reducers = {
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
}

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer)
