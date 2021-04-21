import filterReducer from './filters'
import filterPizzas from './pizzas'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: filterPizzas,
})

export default rootReducer
