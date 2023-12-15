import { combineReducers } from "redux";
import productReducer from "./Product/reducer/reducer";
const rootReducer = combineReducers({
     productReducer,
})

export default rootReducer