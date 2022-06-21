 
import { combineReducers, legacy_createStore } from "redux"
import {createStore} from "redux"
  import { Homereducer } from "./Redux/Home/reducer"
 import { Cartreducer } from "./Redux/cart/reducer"

 
const rootreducer = combineReducers({
    Homereducer:Homereducer,
    Cartreducer:Cartreducer
})
 
 const store = createStore(rootreducer)
console.log("store",store.getState())

//getSatte is object here that have counter and todo

  export default store