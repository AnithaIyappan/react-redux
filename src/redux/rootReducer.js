import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceReducer from "./icecream/iceReducer";
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceReducer,
    user: userReducer
})

export default rootReducer;