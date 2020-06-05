import { combineReducers } from 'redux'

import NavReducer from './components/MainLayout/Reducer'
import ErrorReducer from './components/ErrorToast/Reducer'

export default combineReducers({
    NavReducer,
    ErrorReducer,
})