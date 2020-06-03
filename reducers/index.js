import { combineReducers } from 'redux'

import NavReducer from './nav'
import ErrorReducer from './error'

export default combineReducers({
    NavReducer,
    ErrorReducer,
})