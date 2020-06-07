import { combineReducers } from 'redux'

import NavReducer from './components/MainLayout/reducer'
import ErrorReducer from './components/ErrorToast/reducer'
import JsonConvertReducer from './components/JsonConvert/reducer'
import RandomStringReducer from './components/RandomString/reducer'

export default combineReducers({
    NavReducer,
    ErrorReducer,
    JsonConvertReducer,
    RandomStringReducer,
})