import { combineReducers } from "redux"
import reducer from "./reducers/loginreducer"
import todoreducer from "./reducers/todoreducer"

const rootReducer = combineReducers({
    loginState: reducer,
    todoState:todoreducer
})

export default rootReducer