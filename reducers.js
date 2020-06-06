import { combineReducers } from 'redux'

import NavReducer from './components/MainLayout/reducer'
import ErrorReducer from './components/ErrorToast/reducer'

export default combineReducers({
    NavReducer,
    ErrorReducer,
})